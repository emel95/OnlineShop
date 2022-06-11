import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackMaster from './StackMaster';
import TabBottom from './TabBottom';


const Stack = createNativeStackNavigator();
const StackParent = () => {

    return (
        <Stack.Navigator screenOptions={{ header: () => null }} >
             <Stack.Screen name="TabBottom" component={TabBottom} />
            <Stack.Screen name="StackMaster" component={StackMaster} />
           
        </Stack.Navigator>
    )
}
export default StackParent;