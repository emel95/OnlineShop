import { StyleSheet } from 'react-native';
import COLORS from '../../../consts/colors';

const styles = StyleSheet.create({
    wrapper: {
      height: 60,
      position: 'absolute',
      bottom: 20,
      right: 16,
      left: 16,
      borderRadius: 15,
      backgroundColor: COLORS.white,
  
      shadowColor: COLORS.dark,
      shadowOpacity: 0.6,
      shadowOffset: {
        width: 1,
        height: 1
      },
      elevation: 5
  
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      // alignItems:'center',
  
  
    },
  });
  
export default styles;  