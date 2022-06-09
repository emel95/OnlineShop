import { StyleSheet} from 'react-native';
import COLORS from '../../../consts/colors';
const styles = StyleSheet.create({
   
    header: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    txtWelcom: {
      fontSize: 25,
      fontWeight: 'bold',
      color: COLORS.dark
    },
    txtTitleApp: {
      fontSize: 38,
      fontWeight: 'bold',
      color: COLORS.green
    },
 

  });
  export default styles;