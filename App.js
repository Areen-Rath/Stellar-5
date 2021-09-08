import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home';
import SpaceCraftScreen from './Screens/SpaceCraft';
import DailyPicScreen from './Screens/DailyPic';
import StarMapScreen from './Screens/StarMap';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render(){
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
                <Stack.Screen name="DailyPic" component={DailyPicScreen} />
                <Stack.Screen name="StarMap" component={StarMapScreen} />
              </Stack.Navigator>
            </NavigationContainer>
        );
    }
}