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
import { View, StyleSheet } from 'react-native'
// import City from './src/screens/City'
import CurrentWeather from './src/screens/CurrentWeather'
// import UpcomingWeather from './src/screens/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      {/* <UpcomingWeather /> */}
      {/* <City /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
