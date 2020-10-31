
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/Screens/MainTabScreen';
import { DrawerContent } from './src/Screens/DrawerContent';
import SupportScreen from './src/Screens/SupportScreen';
import SettingsScreen from './src/Screens/SettingsScreen';
import BookmarkScreen from './src/Screens/BookmarkScreen';
import News from './src/apps/news'

import RootStackScreen from './src/Screens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import { useEffect } from 'react';
import { AuthContext } from './components/context';

const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  // const initialLoginState = {
  //   isLoading: true,
  //   userName: null,
  //   userToken: null
  // };

  // const loginReducer = (prevState, action) =>{
  //     switch (key) {
  //       case 'RETRIEVE_TOKEN':
  //         return {
  //           ...prevState,
  //           userToken:action.token,
  //           isLoading:false
  //         };
  //       case 'LOGIN':
  //           return {
  //             ...prevState,
  //             userName:action.id,
  //             userToken:action.token,
  //             isLoading:false

  //           };
  //           case 'LOGOUT':
  //         return {
  //           userName:null,
  //             userToken:null,
  //             isLoading:false
  //         };
  //         case 'REGISTER':
  //         return {
  //           userName:action.id,
  //           userToken:action.token,
  //           isLoading:false
  //         };


  //     }
  // };

  // const[login]

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    }
  }), []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    // <News />
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
            <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
            <Drawer.Screen name='SupportScreen' component={SupportScreen} />
            <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
            <Drawer.Screen name='BookmarkScreen' component={BookmarkScreen} />
          </Drawer.Navigator>)
          :
          <RootStackScreen />
        }


      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;