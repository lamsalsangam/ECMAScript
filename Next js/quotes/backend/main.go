/* package main

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Quote struct {
	Message string `json:"message"`
	Success bool   `json:"success"`
	Data    string `json:"data"`
}

func main() {
	r := gin.Default()
	r.Use(corsMiddleware)

	r.GET("/api/prtense", func(c *gin.Context) {
		// Fetch the quotes form the external API
		quote, err := getQuote()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		response := Quote{
			Message: "Successfully fetched",
			Success: true,
			Data:    quote,
		}
		c.JSON(http.StatusOK, response)
	})

	r.Run(":8000") // Run on port 8000
}

func corsMiddleware(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")

	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(http.StatusOK)
		return
	}
	c.Next()

}

func getQuote() (string, error) {
	resp, err := http.Get("https://quote-garden.onrender.com/api/v3/quotes/random?count=1")
	if err != nil {
		return "", err
	}

	// ensure that a resource, in this case, the response body of an HTTP request, is closed automatically after its associated function has completed execution.
	defer resp.Body.Close()

	/*
		This code snippet retrieves JSON data from an HTTP response body, decodes it into a slice of structs, and then returns the `QuoteText` field from the first element of the slice.

		Let's break it down step by step:

			1. `var data []struct{ QuoteText string }`: This line declares a variable `data`, which is a slice of an anonymous struct. The struct has a single field called `QuoteText`, which is a string. The `json:"quoteText"` tag is specified to map the `QuoteText` field to the corresponding JSON key `quoteText` during decoding.

			2. `err = json.NewDecoder(resp.Body).Decode(&data)`: This line creates a new JSON decoder using `json.NewDecoder`. It reads the JSON data from the HTTP response body `resp.Body` and decodes it into the `data` variable. `&data` is passed as the argument, which means the decoded JSON will be stored in the `data` slice.

			3. `if err != nil { return "", err }`: If there was an error during JSON decoding, the function returns an empty string and the error that occurred.

			4. `if len(data) == 0 { return "", nil }`: If the length of the `data` slice is zero (i.e., no JSON data was decoded), the function returns an empty string with no error, indicating that there is no data available.

			5. `return data[0].QuoteText, nil`: If there is data in the `data` slice, it means that JSON was successfully decoded. The function returns the value of the `QuoteText` field from the first element of the `data` slice as the result, along with no error (`nil`) to indicate success.

		In summary, this code snippet is commonly used to decode JSON data received from an HTTP response body into a structured format. It extracts a specific field (`QuoteText`) from the JSON data and returns it as a string. If the JSON data is not present or there was an error during decoding, appropriate values are returned to handle these scenarios.

	var data []struct {
		QuoteText string `json:"quoteText"`
	}

	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return "", err
	}
	if len(data) == 0 {
		return "", nil
	}

	return data[0].QuoteText, nil
}
*/
// ####################################################################

/* package main

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Quote struct {
	Message string `json:"message"`
	Success bool   `json:"success"`
	Data    string `json:"data"`
}

func main() {
	r := gin.Default()

	// CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Allow the frontend URL
		AllowMethods:     []string{"GET", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.GET("/api/pretense", func(c *gin.Context) {
		quote, err := getQuote()
		if err != nil {
			c.JSON(http.StatusInternalServerError, Quote{
				Message: "Failed to fetch the quote",
				Success: false,
				Data:    "",
			})
			return
		}

		response := Quote{
			Message: "Successfully fetched",
			Success: true,
			Data:    quote,
		}
		c.JSON(http.StatusOK, response)
	})

	r.Run(":8000") // Run the server on port 8000
}

func getQuote() (string, error) {
	resp, err := http.Get("https://quote-garden.onrender.com/api/v3/quotes/random?count=1")
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var data struct {
		Data []struct {
			QuoteText string `json:"quoteText"`
		} `json:"data"`
	}

	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return "", err
	}

	if len(data.Data) == 0 {
		return "", nil
	}

	return data.Data[0].QuoteText, nil
}
*/

package main

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Quote struct {
	Message string `json:"message"`
	Success bool   `json:"success"`
	Data    string `json:"data"`
}

// Custom CORS middleware
func corsMiddleware(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000") // Allow the frontend URL
	c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type")

	if c.Request.Method == "OPTIONS" {
		c.AbortWithStatus(http.StatusOK)
		return
	}

	c.Next()
}

func main() {
	r := gin.Default()

	// Use the custom CORS middleware
	r.Use(corsMiddleware)

	r.GET("/api/pretense", func(c *gin.Context) {
		quote, err := getQuote()
		if err != nil {
			c.JSON(http.StatusInternalServerError, Quote{
				Message: "Failed to fetch the quote",
				Success: false,
				Data:    "",
			})
			return
		}

		response := Quote{
			Message: "Successfully fetched",
			Success: true,
			Data:    quote,
		}
		c.JSON(http.StatusOK, response)
	})

	r.Run(":8000") // Run the server on port 8000
}

func getQuote() (string, error) {
	resp, err := http.Get("https://quote-garden.onrender.com/api/v3/quotes/random?count=1")
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	var data struct {
		Data []struct {
			QuoteText string `json:"quoteText"`
		} `json:"data"`
	}

	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return "", err
	}

	if len(data.Data) == 0 {
		return "", nil
	}

	return data.Data[0].QuoteText, nil
}
