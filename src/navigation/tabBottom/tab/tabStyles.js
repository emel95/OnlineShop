import {  StyleSheet } from 'react-native';
import COLORS from '../../../consts/colors';

const styles = StyleSheet.create({
    container: {
  
      height: 60,
      // backgroundColor:'pink',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 7,
    },
  
    txt: {
      color: 'rgba(0,0,0,0.2)',
      // fontFamily: myFontFamily.regular, 
      fontSize: 14,
      fontWeight: 'bold',
      paddingLeft: 7,
    },
    activeTab: {
      paddingHorizontal: 10,
      paddingVertical: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 10
    },
    inActiveTab: {
      paddin: 15,
      backgroundColor: 'yellow',
      borderRadius: 10
    },
    badge: {
      position: 'absolute',
      zIndex: 10,
      top: 0,
      left: 35,
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center'
    },
    badgeTxt: {
      color: COLORS.white,
      fontSize: 12,
      fontWeight: 'bold'
    }
  });
  
  export default styles;