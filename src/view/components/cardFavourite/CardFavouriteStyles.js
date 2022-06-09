import { StyleSheet} from 'react-native';
import COLORS from '../../../consts/colors';

const styles = StyleSheet.create({

    cartCard: {
        height: 250,
        elevation: 15,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        marginVertical: 10,
        marginHorizontal: 20,
        // paddingHorizontal: 10,
        // alignItems: 'center',

    },
    viewIconLike: {
        alignItems: 'flex-end',
        padding: 10,
    },
    txtPrice: {
        fontWeight: 'bold',
        fontSize: 14,
        color: COLORS.dark
    },
    txtNamePlant: {
        fontWeight: 'bold',
        fontSize: 18,
        color: COLORS.dark
    },
    viewRowPriceName: {
        flex: 1,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.light
    },
    viewImage: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 150,
        resizeMode: 'contain'
    },
});

export default styles;