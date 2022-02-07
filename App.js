import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from './src/core/theme'
import SplashScreen from 'react-native-splash-screen';

import {  
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from './src/screens'

const Stack = createNativeStackNavigator()

export default function App() {
  
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />         
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// function BottomNavigation() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color }) => <ProfileIcon fill={color} />,
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator drawerContent={DrawerContent}>
//       <Drawer.Screen name="HomeScreen" component={BottomNavigation} />
//     </Drawer.Navigator>
//   )
// }
