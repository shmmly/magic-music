/*
 * @Description:
 * @Author: 流年的樱花逝
 * @Date: 2019-08-14 10:45:43
 * @GitHub: https://github.com/shmmly
 */
import {Dimensions, Platform} from 'react-native'

export default {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  isIos: Platform.OS === 'ios',
}
