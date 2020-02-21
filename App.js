import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import homePage from './src/homePage';
import SignUp from './src/SignUp';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('Flick-frontend',  () => point);
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ homePage}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;