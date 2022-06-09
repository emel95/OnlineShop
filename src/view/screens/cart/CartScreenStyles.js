

import { StyleSheet} from 'react-native';
import COLORS from '../../../consts/colors';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewBottom: {
        paddingHorizontal: 10,
        marginBottom: 90
    },
    viewRowPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    txtTotalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.green
    },
    txtPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.green
    },
    btnBuy: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: COLORS.green,
        borderColor: COLORS.green,
        borderWidth: 1,
        borderRadius: 25,
        alignItems: 'center',
        paddingVertical: 8
    },
    txtBtnBuy: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white
    },
    
    delete: {
        backgroundColor: 'tomato',
        width: 50,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    deleteBox: {
        backgroundColor: 'red'
    },
    viewEmptyCart:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    // iconEmptyCart:{
    
    // }
});
export default styles;