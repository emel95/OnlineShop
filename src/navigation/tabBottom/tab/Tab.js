import React,{useEffect} from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useShopContext } from '../../../context/cart/GlobalStateCart';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './tabStyles';

// create a component 
const Tab = ({setSelected ,color, backColor, onPress, icon, lable, tabName, isActiveTab }) => {
  const cartState = useShopContext();
//  const navigation = useNavigation();
// if(isActiveTab)


  return (
    <View style={styles.container}>
      {tabName === "Cart" && cartState.cart.length > 0 ?
        (<View style={[styles.badge, isActiveTab && { left: 70 }]}>
          <Text style={styles.badgeTxt}>{cartState.cart.length}</Text>
        </View>

        ) : (null)
      }

      <TouchableOpacity onPress={onPress} style={[styles.activeTab, { backgroundColor: backColor }]}>
        <Icon name={icon} color={color} size={25} />
        {isActiveTab && <Text style={[styles.txt, { color: color }]}>{lable}</Text>}

      </TouchableOpacity>

    </View>

  );

};




//make this component available to the app 
export default Tab;