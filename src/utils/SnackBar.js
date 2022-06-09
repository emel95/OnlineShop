import React, { Component } from 'react';
import { AppRegistry, Animated, View, Platform, Button, Image, StyleSheet, Text } from 'react-native';

const SnackBar = () => {

    const animatedValue = new Animated.Value(60);

    const ShowSnackBar = false;

    const HideSnackBar = true;

    const [snackBarInsideMsgHolder, setSnackBarInsideMsgHolder] = useState('')

  const   ShowSnackBarFunction=(SnackBarInsideMsgHolder="Default SnackBar Message...", duration=3000)=>
    {
      if( this.ShowSnackBar === false )
      {
        setSnackBarInsideMsgHolder(SnackBarInsideMsgHolder)  ;
   
        const ShowSnackBar = true;
   
        Animated.timing
        (
            this.animatedValue,
            { 
                toValue: 2,
                duration: 350
            }
        ).start(this.hide(duration));
      }     
    }
   const hide = (duration) =>
    {
     const timerID = setTimeout(() =>
      {
        if(HideSnackBar === true)
        {
            HideSnackBar = false;
 
            Animated.timing
            (
              this.animatedValue,
              { 
                toValue: 60,
                duration: 350
              }
            ).start(() =>
            {
             HideSnackBar = true;
              ShowSnackBar = false;
 
              clearTimeout(timerID);
            })
        }
      }, duration); 
    }
    const SnackBarCloseFunction = () =>
    {
      if(HideSnackBar === true)
      {
          HideSnackBar = false;
 
          clearTimeout(timerID);
 
          Animated.timing
          (
              animatedValue,
              { 
                toValue: 60,
                duration: 350
              }
          ).start(() =>
          {
              ShowSnackBar = false;
              HideSnackBar = true;
          });
      }
    }
 
    return (
        <Animated.View style={[{ transform: [{ translateY: animatedValue }] }, styles.SnackBarContainterView]}>
            <Text numberOfLines={1} style={styles.SnackBarInsideTextStyle}>{snackBarInsideMsgHolder}</Text>
            <Text style={styles.SnackBarUndoTextStyle} onPress={SnackBarCloseFunction} > UNDO </Text>
        </Animated.View>
    )
}

export default SnackBar;
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingTop: (Platform.OS) === 'ios' ? 20 : 10
      },

        SnackBarContainterView:
        {
            position: 'absolute',
            backgroundColor: '#009688',
            flexDirection: 'row',
            alignItems: 'center',
            left: 0,
            bottom:10 ,
            right: 0,
            height: 60,
            paddingLeft: 10,
            paddingRight: 55
        },

        SnackBarInsideTextStyle:
        {
            color: '#fff',
            fontSize: 18
        },

        SnackBarUndoTextStyle: {

            color: '#FFEB3B',
            fontSize: 18,
            position: 'absolute',
            right: 10,
            justifyContent: 'center',
            padding: 5

        }
    });