import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useFavoritesActions, useFavoritesContext, useFavoritesContextSetState } from '../../../context/Favorite/GlobalStateFavorites';
import styles from './CardListProductsStyles';



const CardListProducts = ({ plant }) => {
    const navigation = useNavigation();
    const favorite = useFavoritesContext();
    const setFavorite = useFavoritesContextSetState();
    const islike = useFavoritesActions(plant.id);

    const handelPress = (id) => {
        const favoriteOld = [...favorite];
        const itemIndex = favoriteOld.findIndex(item => item === id);
        if (itemIndex < 0) {
            favoriteOld.push(plant.id);
            setFavorite(favoriteOld);
        } else {
            favoriteOld.splice(itemIndex, 1);
            setFavorite(favoriteOld);
        }
        console.log("favoriteOld", favoriteOld);
    }


    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={() => navigation.navigate("Details", plant)}
        >

            <View style={styles.CardListProducts}>

                <View style={styles.viewLikeDirectiomRowLeft}>
                    <TouchableOpacity
                        onPress={() => handelPress(plant.id)}
                        style={[styles.viewLike, { backgroundColor: islike ? 'rgba(245,42,42,0.2)' : 'rgba(0,0,0,0.2)' }]}>
                        <Icon name="favorite" size={18} color={islike ? COLORS.red : COLORS.dark} />
                    </TouchableOpacity>
                </View>

                <View style={styles.viewImage}>
                    <Image style={styles.image} source={plant.img} />
                </View>
                <Text style={styles.txtTitlePlant}>{plant.name}</Text>
                <View style={styles.viewRowBottomPriceAdd}>
                    <Text style={styles.txtPrice}>${plant.price}</Text>
                    <View style={styles.viewIconAdd}>
                        <Icon name="add" size={18} color={COLORS.white} />
                    </View>
                </View>


            </View>


        </TouchableOpacity>

    );

}
export default CardListProducts;
