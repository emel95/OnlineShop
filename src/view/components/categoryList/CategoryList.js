import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CategoryListStyles';

const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

const CategoryList = () => {
    const [categoryIndex, setCategoryIndex] = useState(0)
    return (
        <View style={styles.categoryContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    key={index}
                    onPress={() => setCategoryIndex(index)}>
                    <Text style={[styles.categoryText, categoryIndex === index && styles.categoryTextSelected]}>
                        {item}
                    </Text>
                </TouchableOpacity>

            ))}
        </View>
    );
}
export default CategoryList;
