
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import COLORS from './src/consts/colors';
import GlobalStateCart from './src/context/cart/GlobalStateCart';
import GlobalStateProducts from './src/context/product/GlobalStateProducts';
import StackMaster from './src/navigation/StackMaster';
import GlobalStateFavorites from './src/context/Favorite/GlobalStateFavorites';
import GlobalStateProductsCache from './src/context/product/GlobalStateProductsCache';
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
// ]);

const App = () => {



  return (
    <GlobalStateProductsCache>
    <GlobalStateProducts>
      <GlobalStateCart>
        <GlobalStateFavorites>
          <NavigationContainer>
            <StatusBar barStyle='dark-content' backgroundColor={COLORS.white} />
            <StackMaster />
          </NavigationContainer>
        </GlobalStateFavorites>
      </GlobalStateCart>
    </GlobalStateProducts>
    </GlobalStateProductsCache>
  );
};



export default App;
