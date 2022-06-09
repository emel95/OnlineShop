import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './headerStyles';

const Header = () => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.txtWelcom}>Welcome to</Text>
                <Text style={styles.txtTitleApp}>Plant Shop</Text>
            </View>
            <Icon name="shopping-cart" size={28} color={COLORS.dark} />
        </View>
    )
}

export default Header;