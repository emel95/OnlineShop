import { StyleSheet} from 'react-native';
import COLORS from '../../../consts/colors';
const styles = StyleSheet.create({
    container: {
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
});
export default styles;