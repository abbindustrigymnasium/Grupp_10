import React from 'react';
import { 
    StyleSheet, 
    View,
} from 'react-native';

import {
  createStackNavigator,
} from 'react-navigation';

import Screen5 from './app/components/screen5/Screen5';

const StackNavigator = createStackNavigator({
    Screen5: { 
        screen: Screen5,
        navigationOptions: {
            title: false,
            header: null,
        }
    },
},{ headerMode: 'screen' });

export default class App extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <StackNavigator />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});