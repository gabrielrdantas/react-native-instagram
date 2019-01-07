/** @format */

import {AppRegistry} from 'react-native';
import HomeContainerComponent from './presentation/home/HomeContainerComponent';
import {name as appName} from '../app.json';

export default () => {
    AppRegistry.registerComponent(appName, () => HomeContainerComponent);
}