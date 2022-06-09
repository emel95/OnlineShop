import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, DetailsScreen } from '../view/screens/index';
import TabBottom from './TabBottom';


const Stack = createNativeStackNavigator();
const StackMaster = () => {

    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Tab" component={TabBottom} />
             {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}
export default StackMaster;