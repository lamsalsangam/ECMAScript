// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View } from 'react-native'

// export default function App() {
//   const message = 'Hello!'
//   return (
//     <View style={styles.container}>
//       <Text>{message} from the Main Page</Text>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const App = () => {
  return (
    // SafeAreaView will render the Component just below the status bar of the device
    <SafeAreaView style={styles.wrapper}>
      {/* <View style={{ backgroundColor: 'gray' }}> */}
      <View style={styles.container}>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It&apos;s sunny</Text>
        <Text style={styles.message}>It&apos;s perfect t-shirt weather</Text>
      </View>
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
    alignItems: 'center'
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
    alignItems: 'flex-start'
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default App

// It is often cleaner to use `StyleSheet.create` to define several styles in one place. For Example;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
