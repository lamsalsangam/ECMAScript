package main

import (
	"encoding/csv"
	"fmt"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

type KanjiData struct {
	Kanji      string       `json:"kanji"`
	Options    [4][2]string `json:"options"`
	CorrectIdx int          `json:"correctIdx"`
}

var kanjiDataList []KanjiData
var currentIndex int
var score int
var lives int
var highScore int

func main() {
	loadKanjiData("question.csv")

	r := gin.Default()

	// Apply the CORS middleware
	r.Use(corsMiddleware)

	r.GET("/getQuestion", getQuestionHandler)
	r.POST("/checkAnswer", checkAnswerHandler)
	r.GET("/resetGame", resetGameHandler)

	port := ":8080"
	fmt.Printf("Server listening on port %s\n", port)
	r.Run(port)
}

func corsMiddleware(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000") // Allow the frontend URL
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")

	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(http.StatusOK)
		return
	}

	c.Next()
}

func loadKanjiData(filename string) {
	file, err := os.Open(filename)
	if err != nil {
		fmt.Println("Error opening CSV file:", err)
		return
	}
	defer file.Close()

	reader := csv.NewReader(file)
	records, err := reader.ReadAll()
	if err != nil {
		fmt.Println("Error reading CSV file:", err)
		return
	}

	kanjiDataList = make([]KanjiData, 0, len(records)-1)
	for i := 1; i < len(records); i++ {
		kanjiData := KanjiData{
			Kanji: records[i][0],
			Options: [4][2]string{
				parseOption(records[i][1]),
				parseOption(records[i][2]),
				parseOption(records[i][3]),
				parseOption(records[i][4]),
			},
		}
		correctIdx, _ := strconv.Atoi(records[i][5])
		kanjiData.CorrectIdx = correctIdx
		kanjiDataList = append(kanjiDataList, kanjiData)
	}
}

func parseOption(option string) [2]string {
	option = option[1 : len(option)-1]
	parts := splitAndTrim(option, ",")

	// If the option does not have enough elements, fill with empty strings
	if len(parts) < 2 {
		for len(parts) < 2 {
			parts = append(parts, "")
		}
	}

	return [2]string{parts[0], parts[1]}
}

func splitAndTrim(str, sep string) []string {
	parts := strings.Split(str, sep)
	for i, part := range parts {
		parts[i] = strings.TrimSpace(part)
	}
	return parts
}

func shuffleOptions(options [4][2]string) [4][2]string {
	rand.New(rand.NewSource(time.Now().UnixNano()))
	// Fisher-Yates shuffle algorithm
	for i := len(options) - 1; i > 0; i-- {
		j := rand.Intn(i + 1)
		options[i], options[j] = options[j], options[i]
	}
	return options
}

func getQuestionHandler(c *gin.Context) {
	if currentIndex == -1 {
		resetGame()
	}

	if lives <= 0 || currentIndex >= len(kanjiDataList) {
		c.JSON(http.StatusOK, gin.H{
			"status":    "game_over",
			"score":     score,
			"highScore": highScore,
		})
		return
	}

	question := kanjiDataList[currentIndex]
	shuffledOptions := shuffleOptions(question.Options)

	response := gin.H{
		"status":    "question",
		"kanji":     question.Kanji,
		"options":   shuffledOptions,
		"score":     score,
		"lives":     lives,
		"highScore": highScore,
	}
	c.JSON(http.StatusOK, response)
}

func checkAnswerHandler(c *gin.Context) {
	var answer struct {
		AnswerIdx int `json:"answerIdx"`
	}
	if err := c.ShouldBindJSON(&answer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	if currentIndex >= len(kanjiDataList) || lives <= 0 {
		c.JSON(http.StatusOK, gin.H{"status": "game_over"})
		return
	}

	question := kanjiDataList[currentIndex]
	if answer.AnswerIdx == question.CorrectIdx {
		score++
	} else {
		lives--
	}

	currentIndex++

	if score > highScore {
		highScore = score
	}

	getQuestionHandler(c)
}

func resetGameHandler(c *gin.Context) {
	resetGame()
	getQuestionHandler(c)
}

func resetGame() {
	score = 0
	lives = 10
	currentIndex = 0
}
