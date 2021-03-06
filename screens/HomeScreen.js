import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerContent} from './DrawerContent';
import StageScreen from './StageScreen';
import {useGlobal} from '../context/GlobalContext';
import SplashScreen from './SplashScreen';
import QuestionScreen from './QuestionScreen';
import Home from './Home';

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation}) => {
  const {title} = useGlobal();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerTitle: 'Trang Chủ'}}
        />
        <Drawer.Screen
          name="StageScreen"
          component={StageScreen}
          options={{title: title}}
        />
        <Drawer.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="QuestionScreen"
          component={QuestionScreen}
          options={{title: 'question', headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
