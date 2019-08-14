import React, {FC} from 'react'
import {ScrollView, Image, StyleSheet, Text} from 'react-native'
import ReHeader from './ReHeader'
import deviceInfo from '../../utils/deviceInfo'
interface RecommendProp {}
const Recommend: FC<RecommendProp> = () => {
  return (
    <ScrollView style={styles.container}>
      <ReHeader />
      <Text>推荐歌单</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Recommend
