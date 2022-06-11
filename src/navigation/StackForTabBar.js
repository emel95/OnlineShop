import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './../view/screens/home/HomeScreen';
import FavoriteScreen from './../view/screens/favorite/FavoriteScreen';
import CartScreen from './../view/screens/cart/CartScreen';

const Stack = createNativeStackNavigator();
const StackForTabBar = () => {

    return (

        // ********* stack navigation is navigtion parent **********
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} initialParams={{ lable: 'Home', icon: "home" }} />
            <Stack.Screen name="Favorite" component={FavoriteScreen} initialParams={{ lable: 'Favorite', icon: "hearto" }} />
            <Stack.Screen name="Cart" component={CartScreen} initialParams={{ lable: 'Cart', icon: "shoppingcart" }} />
        </Stack.Navigator>
    )
}
export default StackForTabBar;