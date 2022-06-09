import { StyleSheet} from 'react-native';
import COLORS from '../../../consts/colors';
const styles = StyleSheet.create({
    iconSearch: {
      marginLeft: 20
    },
    searchContainer: {
      height: 50,
      backgroundColor: COLORS.light,
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    input: {
      fontSize: 18,
      fontWeight: 'bold',
      color: COLORS.dark,
      flex: 1
    },
  });
  export default styles;