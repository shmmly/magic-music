import React, {FC} from 'react'
import {ScrollView, Image, StyleSheet, Text} from 'react-native'
import ReHeader from './ReHeader'
import deviceInfo from '../../utils/deviceInfo'
interface RecommendProp {}
const Recommend: FC<RecommendProp> = () => {
  return (
    <ScrollView style={styles.container}>
      <ReHeader />
      <Text style={styles.text}>推荐歌单</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal:10
  },
})

export default Recommend
