import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useProductsContextSetState } from '../../../context/product/GlobalStateProducts';
import styles from './searchStyles';
import { useProductsContextCache } from '../../../context/product/GlobalStateProductsCache';


const Search = () => {
 
  const setProducts = useProductsContextSetState();
  const productsCache = useProductsContextCache();
  const [search, setSearch] = useState('');


  useEffect(()=>{
    handelSearch();
  },[search]);

  const onChangeText =(text) => {
    setSearch(text);
  }


  const handelSearch = () => {
    if (search) {
      const newData = productsCache.filter((item) => {
        const itemData = item.name.toLowerCase();
        const textData = search.replace(/\s/g, '').toLowerCase();
        //  return itemData.includes(textData);
        return itemData.indexOf(textData) > -1;
      });
      if (newData) {
        setProducts(newData);
        // setSearch(text);
      }
      else {

        setProducts(productsCache);
      }

      
    } else {
      setProducts(productsCache);
      // setSearch(text);
    }
  }


  return (
        <View style={styles.searchContainer}>
          <Icon name="search" size={25} style={styles.iconSearch} />
          <TextInput placeholder='Search'
            value={search}
            underlineColorAndroid="transparent"
            // onChangeText={(text) => setSearch(text)}
            onChangeText={onChangeText}
            
            onSubmitEditing={handelSearch}
            style={styles.input} />
        </View>
  );
};
export default Search;
