import React,{useCallback} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, CartScreen,FavoriteScreen } from '../view/screens/index';
import {  BackHandler, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import TabBar from './tabBottom/tabBars/TabBar';
import StackForTabBar from './StackForTabBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


let backCounter = 0;
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabBottom = () => {

  function isSelectionModeEnabled() { 
    setTimeout( ()=>{backCounter = 0},2000
      // function () { 
      //   backCounter = 0; 
      // } 
        // .bind(this), 
      // 2000, 
    ); 
 
    if (backCounter < 1) { 
      // SnackBar(Strings.exitApp);
      console.log('not exit App') ;
    } else { 
      backCounter = 0; 
      BackHandler.exitApp(); 
      return true; 
    } 
    backCounter++; 
    return true; 
 
  } 

  useFocusEffect( 
   useCallback(() => { 
      const onBackPress = () => { 
        if (isSelectionModeEnabled()) { 
          return true; 
        } else { 
          return false; 
        } 
      }; 
      BackHandler.addEventListener('hardwareBackPress', onBackPress); 
 
      return () => 
        BackHandler.removeEventListener('hardwareBackPress', onBackPress); 
    }, [isSelectionModeEnabled]) 
  ); 
 
  // const cartState = useShopContext();
  // const count = cartState.cart.length;
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />} initialRouteName='Home' 
    screenOptions={{
      keyboardHidesTabBar: (Platform.OS == "ios" ? false : true) ,
      headerShown: false,
      // tabBarStyle: {
      //   height: 60,
      //   position: 'absolute',
      //   bottom: 16,
      //   right: 16,
      //   left: 16,
      //   borderRadius: 10,
      //   backgroundColor:COLORS.dark
      // }
    }}>
      {/* <Tab.Screen name="StackForTabBar"  component={StackForTabBar}/> */}
      <Stack.Screen name="Home" component={HomeScreen} initialParams={{ lable: 'Home', icon: "home" }}/>
      <Stack.Screen name="Favorite" component={FavoriteScreen} initialParams={{ lable: 'Favorite', icon: "hearto"}}/>
      <Stack.Screen name="Cart" component={CartScreen} initialParams={{ lable: 'Cart', icon:"shoppingcart" }} />
    </Tab.Navigator>
  )
}
export default TabBottom;




 

 
 
 
  
 
 
// export default MainTabScreen