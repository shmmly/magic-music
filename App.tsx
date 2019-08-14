/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, useState, useEffect} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native'

import GlobalHeader from './src/components/GlobalHeader/GlobalHeader'
import Colors from './src/style/colors'
import deviceInfo from './src/utils/deviceInfo'
import Recommend from './src/views/Recommend/Recommend';

const App = () => {
  useEffect(() => {
    !deviceInfo.isIos &&
      StatusBar.setBackgroundColor(Colors.headerBackGroundColor)
  }, [])

  return (
    <Fragment>
      <GlobalHeader />
      <Recommend></Recommend>
    </Fragment>
  )
}

export default App
