import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import COLORS from '../../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useShopContextSetState } from '../../../context/cart/GlobalStateCart';
// import Snackbar from 'react-native-snackbar';
import styles from './DetailsScreenStyles';

const DetailsScreen = ({ navigation, route }) => {
  const plant = route.params;
  const [count, setCount] = useState(1);
  const dispatch = useShopContextSetState();

  const handelAddToCart = async () => {
    // Snackbar.show({
    //   text: 'Hello world',
    //    duration: Snackbar.LENGTH_SHORT,

    //   action: {
    //     text: 'UNDO',
    //     textColor: 'green',
    //     onPress: () => { Snackbar.dismiss() },
    //   },
    // });

    dispatch({ type: "ADD_PRODUCT", payloade: { plant, count } });
    let cartStorage = await AsyncStorage.getItem('@cart');
    console.log('cartStorage', JSON.parse(cartStorage));
    let cartPrev = JSON.parse(cartStorage);
    if (cartPrev !== null) {
      const updatedItemIndex = cartPrev.findIndex(
        item => item.id === plant.id
      );
      if (updatedItemIndex < 0) {
        //  value.push({id:plant.id,count});
        const cartNew = [...cartPrev, { id: plant.id, count }];
        await AsyncStorage.setItem('@cart', JSON.stringify(cartNew));
      } else {
        const updatedItem = { ...cartPrev[updatedItemIndex] };
        updatedItem.count = count;
        cartPrev[updatedItemIndex] = updatedItem;
        await AsyncStorage.setItem('@cart', JSON.stringify(cartPrev));
      }
    }
    else {
      let cartNew = [{ id: plant.id, count }];
      await AsyncStorage.setItem('@cart', JSON.stringify(cartNew));
    }

  }

  const handelMinus = () => { setCount(prev => prev - 1) }
  const handelPlus = () => { setCount(prev => prev + 1) }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} color={COLORS.dark} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} color={COLORS.dark} onPress={() => navigation.navigate("Cart")} />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={plant.img} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.viewRowLinetxtBest}>
          <View style={styles.line} />
          <Text style={styles.txtBestChoice}>Best Choice</Text>
        </View>
        <View style={styles.viewRowPlantnamePrice}>
          <Text style={styles.txtPlantName}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text style={styles.txtPrice}>${plant.price}</Text>
          </View>
        </View>
        <View style={styles.viewAboutBottom}>
          <Text style={styles.txtAbout}>About</Text>
          <Text style={styles.txtPlantAbout}>{plant.about}</Text>
          <View style={styles.viewRowBottomBtnCartBtnPlusMinus}>
            <View style={styles.viewnNumberPlusMinus}>
              <TouchableOpacity disabled={count === 0 ? true : false} style={count === 0 ? [styles.borderBtnPlusMinus, { borderColor: 'grey' }] : styles.borderBtnPlusMinus}
                onPress={handelMinus}>
                <Icon name="remove" size={28} color={COLORS.dark} />
              </TouchableOpacity>
              <Text style={styles.txtCount}>{count}</Text>
              <TouchableOpacity style={styles.borderBtnPlusMinus} onPress={handelPlus}>
                <Icon name="add" size={28} color={COLORS.dark} />
              </TouchableOpacity>
            </View>
            {count === 0 ? (null) : (
              <TouchableOpacity activeOpacity={0.6} style={styles.btnAddToCart}
                onPress={handelAddToCart}>
                <Text style={styles.txtAddToCart}>Add to Cart</Text>
              </TouchableOpacity>
            )}

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DetailsScreen;
