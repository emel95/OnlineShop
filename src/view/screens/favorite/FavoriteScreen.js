import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { useProductFavoritesActions, useFavoritesContext, useFavoritesContextSetState } from '../../../context/Favorite/GlobalStateFavorites';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './FavoriteScreenStyles';
import CardFavourite from '../../components/cardFavourite/CardFavourite';
import COLORS from '../../../consts/colors';

const FavoriteScreen = ({ navigation }) => {

    const setFavorite = useFavoritesContextSetState();
    const productsFavorite = useProductFavoritesActions();
    const favorite = useFavoritesContext();


    if(productsFavorite.length <= 0){
        return(
            <View style={styles.viewEmptyCart}>
                 <Icon name="favorite" size={100}  color={COLORS.grey} />
            </View>
        )
    }
    const handelRemove = (id) => {
        const favoriteOld = [...favorite];
        const itemIndex = favoriteOld.findIndex(item => item === id);
        favoriteOld.splice(itemIndex, 1);
        setFavorite(favoriteOld);
    }

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
                <Text style={styles.txtTitle}>Favourite</Text>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                data={productsFavorite}
                keyExtractor={(p) => p.id}
                renderItem={({ item }) => (
                    <CardFavourite item={item} handelRemove={handelRemove} />
                )}
            />
        </SafeAreaView>
    )
}
export default FavoriteScreen;
