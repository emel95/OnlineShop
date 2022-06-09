import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import COLORS from '../../../consts/colors';
import Tab from '../tab/Tab';
import styles from './TabBarStyles';

const { width } = Dimensions.get('screen');

// create a component 
const TabBar = ({ state, navigation }) => {
  const { routes } = state;
  const [selected, setSelected] = useState("Home");
  // const [tabName, setTabName] = useState('');


  // useEffect(() => {
  //   if (navigation.navigate === tabName)
  //     setSelected(tabName);
  // }, [navigation])



  const _renderIconColor = (currentTab) =>
    (currentTab === selected ? COLORS.white : COLORS.grey);

  const _renderBackgroundColor = (currentTab) =>
    (currentTab === selected ? COLORS.green : null);

  const _isActiveTab = (currentTab) => {
    if (currentTab === selected) {
      return true;
    }
    else
      return false;

  }




  const _handlePress = (activeTab, index) => {

    //  if (state.index !== index) {

    setSelected(activeTab);

    navigation.navigate(activeTab);
    //  }
  }
  return (
    <View style={styles.wrapper}>

      <View style={styles.container}>

        {
          routes.map((route, index) => (

            <Tab

              lable={route.params.lable}

              icon={route.params.icon}

              tabName={route.name}

              key={route.key}
              setSelected={setSelected}
              isActiveTab={_isActiveTab(route.name)}
              color={_renderIconColor(route.name)}
              backColor={_renderBackgroundColor(route.name)}

              onPress={() => _handlePress(route.name, index)}

            />
          ))
        }

      </View>

    </View>
  );
};



export default TabBar;