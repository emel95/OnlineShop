import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconDelete from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../consts/colors';
import { useShopContextSetState, useShopContext } from '../../../context/cart/GlobalStateCart';
import CardCart from './../../components/cardCart/CardCart';
import styles from "./CartScreenStyles";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";


const CartScreen = () => {

    const dispatch = useShopContextSetState();
    const cartState = useShopContext();

    if(cartState.cart.length <= 0){
        return(
            <View style={styles.viewEmptyCart}>
                 <Icon name="shopping-cart" size={100}  color={COLORS.grey} />
            </View>
        )
    } 

    // ========ui Alert when onpress for delete items
    const confirmationAlert = (Order, onPress) => {
        return Alert.alert(Order.name, `Are you sure you want to delete ${Order.name} from the order list `,
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: onPress
                },
            ],
            {
                //*******iane har jaie dige ke klick kone alert baste nashe fagat ba klick ro btns alert baste beshe********
                cancelable: false
            }
        )

    }

    //=======ui swipeable for show  icon delete
    const deleteAction = (Order, onPress) => {
        return (
            <TouchableOpacity onPress={() => confirmationAlert(Order, onPress)}>
                <View style={styles.delete}>
                    <IconDelete name="trash" color="#fff" size={30} />
                </View>
            </TouchableOpacity>
        )

    }

    //========== onpress delete hole item
    const handleDelete = async (item) => {
        //******dorste ke mostagim nmitonam state ro edit koname and baiad ba copye on kar konim  vale inja metode filter miade eke  araie jadid misaze and barmigrdone 
        console.log('Delete');

        dispatch({ type: "REMOVE_FULL_PRODUCT", payloade: item.id });
        let cartStorage = await AsyncStorage.getItem('@cart');
        let cartPrev = JSON.parse(cartStorage);
        const updatedItemIndex = cartPrev.findIndex(i => i.id === item.id);
        cartPrev.splice(updatedItemIndex, 1);

        await AsyncStorage.setItem('@cart', JSON.stringify(cartPrev));
        // setOrder(getOrders.filter(O => O.id !== Order.id));
    }
    //=========== onpress minuse
    const handelMinus = async (item) => {
        dispatch({ type: "MINUS_REMOVE_PRODUCT", payloade: item.id });
        let cartStorage = await AsyncStorage.getItem('@cart');
        let cartPrev = JSON.parse(cartStorage);
        const updatedItemIndex = cartPrev.findIndex(i => i.id === item.id);

        if (item.quantity <= 0) {
            cartPrev.splice(updatedItemIndex, 1);
        } else {
            const updatedItem = { ...cartPrev[updatedItemIndex] };
            updatedItem.count = item.quantity;
            cartPrev[updatedItemIndex] = updatedItem;
        }
        await AsyncStorage.setItem('@cart', JSON.stringify(cartPrev));

    }
    //=======onpress pluse
    const handelPluse = async (item) => {
        dispatch({ type: "PLUSE_ADD_PRODUCT", payloade: item.id });

        let cartStorage = await AsyncStorage.getItem('@cart');
        let cartPrev = JSON.parse(cartStorage);
        const updatedItemIndex = cartPrev.findIndex(i => i.id === item.id);
        const updatedItem = { ...cartPrev[updatedItemIndex] };
        updatedItem.count = item.quantity;
        cartPrev[updatedItemIndex] = updatedItem;
        await AsyncStorage.setItem('@cart', JSON.stringify(cartPrev));

    }

    useEffect(() => {
        dispatch({ type: "TOTAL_PRICE" });
        // const test = async () => {
        //     const value = await AsyncStorage.getItem('@cart');
        //     console.log('value', value);
        // }
        // test();
    }, [cartState.cart]);

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} />
                <Text style={styles.txtTitle}>Cart</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={cartState.cart}
                keyExtractor={(p) => p.id}
                renderItem={({ item }) => (
                    <GestureHandlerRootView>
                        <Swipeable renderRightActions={() => deleteAction(item, () => handleDelete(item))}>
                            <CardCart item={item} handelMinus={handelMinus} handelPluse={handelPluse} />
                        </Swipeable>
                    </GestureHandlerRootView>

                )}
            />
            <View style={styles.viewBottom}>
                <View style={styles.viewRowPrice}>
                    <Text style={styles.txtTotalPrice}>Total Price</Text>
                    <Text style={styles.txtPrice}>${cartState.totalPrice}</Text>
                </View>
                <View style={styles.btnBuy}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { }}>
                        <Text style={styles.txtBtnBuy}>Buy</Text>
                    </TouchableOpacity>

                </View>
            </View>
       
        </SafeAreaView>
    )
}
export default CartScreen;
