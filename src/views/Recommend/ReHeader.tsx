import React, {FC, useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Swiper from 'react-native-swiper'
import {getBanner} from '../../api/request'
import {Banner} from '../../api/types'
import Colors from '../../style/colors'
import deviceInfo from '../../utils/deviceInfo'
interface ReHeaderProp {}
const ReHeader: FC<ReHeaderProp> = () => {
  const [banners, setBanners] = useState<Banner[]>()

  useEffect(() => {
    getBanner().subscribe(res => {
      res && res.banners && setBanners(res.banners)
    })
  }, [])

  return (
    <View style={styles.container}>
      {banners && banners.length > 0 ? (
        <Swiper style={styles.wrapper}>
          {banners.map(
            (banner, index) =>
              banner.imageUrl && (
                <View key={index} style={styles.slide}>
                  <Image source={{uri: banner.imageUrl}} style={styles.image} />
                </View>
              )
          )}
        </Swiper>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  wrapper: {
    height: 150,
    backgroundColor: Colors.headerBackGroundColor,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    height: 150,
    width: deviceInfo.width,
    paddingHorizontal: 10,
    borderRadius: 12,
    resizeMode: 'contain',
    zIndex: 9999,
  },
})

export default ReHeader
