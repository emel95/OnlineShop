import React from 'react';
import { Text, View, TouchableOpacity,  Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../consts/colors';
import styles from './CardFavouriteStyles';

const CardFavourite = ({ item, handelRemove }) => {

    return (
        <View style={styles.cartCard}>
            <TouchableOpacity style={styles.viewIconLike} onPress={() => handelRemove(item.id)}>
                <Icon name="favorite" color={COLORS.red} size={25} />
            </TouchableOpacity>
            <View style={styles.viewImage}>
                <Image source={item.img} style={styles.image} />
            </View>

            <View style={styles.viewRowPriceName}>
                <Text style={styles.txtNamePlant}>{item.name}</Text>
                <Text style={styles.txtPrice}>${item.price}</Text>
            </View>
        </View>
    )
}
export default CardFavourite;
