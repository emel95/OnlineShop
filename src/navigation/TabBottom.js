import React,{useCallback} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, CartScreen,FavoriteScreen } from '../view/screens/index';
import {  BackHandler, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useFocusEffect } from '@react-navigation/native';
import COLORS from '../consts/colors';
import { useShopContext } from '../context/cart/GlobalStateCart';
import TabBar from './tabBottom/tabBars/TabBar';


let backCounter = 0;
const Tab = createBottomTabNavigator();


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
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{ lable: 'Home', icon: "home" }}/>
      <Tab.Screen name="Favorite" component={FavoriteScreen} initialParams={{ lable: 'Favorite', icon: "hearto"}}/>
      <Tab.Screen name="Cart" component={CartScreen} initialParams={{ lable: 'Cart', icon:"shoppingcart" }} />
    </Tab.Navigator>
  )
}
export default TabBottom;




 

 
 
 
  
 
 
// export default MainTabScreen