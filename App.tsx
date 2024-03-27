import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, MoviesListScreen, MoviesDetailScreen} from 'views';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MoviesListScreen" component={MoviesListScreen} />
        <Stack.Screen
          name="MoviesDetailScreen"
          component={MoviesDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
