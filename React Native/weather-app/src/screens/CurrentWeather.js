import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  return (
    // SafeAreaView will render the Component just below the status bar of the device
    <SafeAreaView style={styles.wrapper}>
      {/* <View style={{ backgroundColor: 'gray' }}> */}
      <View style={styles.container}>
        <Feather name="sun" size={100} color={'#002B5B'} />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={styles.highLowWrapper}
          messageOneStyles={styles.highLow}
          messageTwoStyles={styles.highLow}
        />
      </View>
      <RowText
        messageOne={"It's sunny"}
        messageTwo={"It's perfect t-shirt weather"}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messageTwoStyles={styles.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#57C5B6'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: '#002B5B',
    // All Dimensions in the react-native is unitless and represent Density independent pixels
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: '#002B5B'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: '#002B5B',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
