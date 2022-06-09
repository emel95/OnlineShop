import {  StyleSheet ,Dimensions} from 'react-native';
import COLORS from '../../../consts/colors';

const width = Dimensions.get('screen').width / 2 - 30;

const styles = StyleSheet.create({
    CardListProducts: {
        height: 225,
        backgroundColor: COLORS.light,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    viewLikeDirectiomRowLeft: {
        alignItems: 'flex-end'
    },
    viewLike: {
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
    viewImage: {
        height: 100,
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 100,
        resizeMode: 'center',
    },
    txtTitlePlant: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10
    },
    viewRowBottomPriceAdd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    txtPrice: {
        fontWeight: 'bold',
        fontSize: 19
    },
    viewIconAdd: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.green,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default styles;