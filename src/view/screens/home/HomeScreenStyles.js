import { StyleSheet} from 'react-native';
import COLORS from '../../../consts/colors';
const styles = StyleSheet.create({
    Container: {
      marginBottom: 30,
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: COLORS.white
    },
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
   
    viewRowSearchFilter:{ 
      marginTop: 30, 
      flexDirection: 'row' 
    },
    sortBtn: {
      marginLeft: 10,
      height: 50,
      width: 50,
      backgroundColor: COLORS.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
  
    }
  });
  export default styles;