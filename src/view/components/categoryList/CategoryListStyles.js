import {  StyleSheet } from 'react-native';
import COLORS from '../../../consts/colors';
const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 22,
        justifyContent: 'space-between',

    },
    categoryText: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold'
    },
    categoryTextSelected: {
        color: COLORS.green,
        paddingBottom: 7,
        borderBottomWidth: 2,
        borderColor: COLORS.green
    }
});
export default  styles;