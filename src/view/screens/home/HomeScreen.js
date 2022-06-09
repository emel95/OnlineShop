import React, { useEffect} from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import COLORS from '../../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryList from '../../components/categoryList/CategoryList';
import plants from '../../../consts/plants';
import CardListProducts from '../../components/cardListProducts/CardListProducts';
import { useProductsContextSetState, useProductsContext } from '../../../context/product/GlobalStateProducts';
import styles from './HomeScreenStyles';
import Header from '../../components/header/Header';
import {  useProductsContextSetStateCache } from '../../../context/product/GlobalStateProductsCache';
import Search from '../../components/search/Search';


const HomeScreen = () => {
  const products = useProductsContext();
  const setProducts = useProductsContextSetState();
  const setProductsCache = useProductsContextSetStateCache();
 
  useEffect(() => {
    setProducts(plants);
    setProductsCache(plants);
  }, []);


  return (


    <SafeAreaView style={styles.Container}>
     <Header/>
      <View style={styles.viewRowSearchFilter}>
        <Search/>
        <View style={styles.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} onPress={() => { }} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50
        }}
        data={products}
        keyExtractor={p => p.id}
        renderItem={({ item }) => {
          return <CardListProducts plant={item} />;
        }}
      />

    </SafeAreaView>

  );
};
export default HomeScreen;
