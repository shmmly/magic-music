import React, {FC} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Colors from '../../style/colors'
import FontSizes from '../../style/fonts'
import Icon from 'react-native-vector-icons/EvilIcons'

interface GlobalHeaderProp {
  title?: string
}
const GlobalHeader: FC<GlobalHeaderProp> = ({title = '魔音'}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="navicon" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Icon name="search" size={30} color="white" />
      </TouchableOpacity>
      





    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.headerBackGroundColor,
    paddingHorizontal: 20,
  },
  title: {
    color: Colors.headerTextColor,
    fontSize: FontSizes.headerFontSize,
  },
})

export default GlobalHeader
