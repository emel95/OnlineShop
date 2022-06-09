import { StyleSheet } from 'react-native';
import COLORS from '../../../consts/colors';

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: COLORS.white
    },
    header: {
      paddingHorizontal: 20,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    imageContainer: {
      flex: 0.45,
      matginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'contain'
    },
    detailsContainer: {
      flex: 0.55,
      backgroundColor: COLORS.light,
      marginHorizontal: 7,
      marginBottom: 7,
      marginTop: 30,
      paddingTop: 30,
      borderRadius: 7
    },
    viewRowLinetxtBest: {
      marginLeft: 20,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    txtBestChoice: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    line: {
      width: 25,
      height: 2,
      backgroundColor: COLORS.dark,
      marginBottom: 5,
      marginRight: 3
    },
    viewRowPlantnamePrice: {
      marginLeft: 20,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    txtPlantName: {
      fontSize: 22,
      fontWeight: 'bold'
    },
    priceTag: {
      backgroundColor: COLORS.green,
      width: 80,
      height: 40,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      justifyContent: 'center'
    },
    txtPrice: {
      marginLeft: 15,
      color: COLORS.white,
      fontWeight: 'bold',
      fontSize: 16
    },
    viewAboutBottom: {
      paddingHorizontal: 20,
      marginTop: 10,
    },
    txtAbout: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    txtPlantAbout: {
      color: 'grey',
      fontSize: 16,
      lineHeight: 22,
      marginTop: 10
    },
    viewRowBottomBtnCartBtnPlusMinus: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    viewnNumberPlusMinus: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    txtCount: {
      fontSize: 20,
      marginHorizontal: 10,
      fontWeight: 'bold'
    },
    borderBtnPlusMinus: {
      borderColor: COLORS.green,
      borderWidth: 1,
      borderRadius: 5,
      height: 40,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    // txtBtn: {
    //   fontWeight: 'bold',
    //   fontSize: 28
    // },
    btnAddToCart: {
      width: 150,
      height: 50,
      backgroundColor: COLORS.green,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30
    },
    txtAddToCart: {
      color: COLORS.white,
      fontSize: 18,
      fontWeight: 'bold'
    },
  });
  export default styles;