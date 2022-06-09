import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./CardCartStyles";

const CardCart = ({ item, handelMinus, handelPluse }) => {
    return (

        <View style={styles.cartCard}>
            <Image source={item.img} style={styles.image} />
            <View style={styles.viewColumnNamePrice}>
                <Text style={styles.txtname}>{item.name}</Text>
                <Text style={styles.txtPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
            </View>

            <View style={styles.viewRowPlusMinusCount}>
                <TouchableOpacity onPress={() => handelMinus(item)}>
                    <Icon name="remove" size={25} color={COLORS.green} />
                </TouchableOpacity>

                <Text style={styles.txtCount}>{item.quantity}</Text>

                <TouchableOpacity onPress={() => handelPluse(item)}>
                    <Icon name="add" size={25} color={COLORS.green} />
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default CardCart;
