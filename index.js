/*
 * @Description: 
 * @Author: 流年的樱花逝
 * @Date: 2019-08-13 16:05:46
 * @GitHub: https://github.com/shmmly
 */
/**
 * @format
 */
if (__DEV__) {
  import ('./ReactotronConfig').then (() =>
    console.log ('Reactotron Configured')
  );
}
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent (appName, () => App);
