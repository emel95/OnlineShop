import { StyleSheet } from 'react-native';
import COLORS from '../../../consts/colors';

const styles = StyleSheet.create({
    cartCard: {
        height: 100,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
         marginHorizontal: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    image: {
        height: 80,
        width: 80
    },
    viewColumnNamePrice: {
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1
    },
    txtname: {
        fontWeight: 'bold',
        fontSize: 16
    },
    txtPrice: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 10
    },
    viewRowPlusMinusCount: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        borderColor: COLORS.green,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    txtCount: {
        paddingHorizontal: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: "grey"
    },
    delete: {
        backgroundColor: 'tomato',
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteBox: {
        backgroundColor: 'red'
    }
});

export default styles;