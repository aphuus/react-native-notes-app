import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesScreen from './components/NotesScreen';
import AddNewNoteScreen from './components/AddNewNoteScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Notes'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009fe3',
            height: 105,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 21,
          },
        }}
      >
        <Stack.Screen
          name='Notes'
          component={NotesScreen}
          options={{ title: `Notes` }}
        />
        <Stack.Screen
          name='Add Note'
          component={AddNewNoteScreen}
          options={{ title: `Add Note` }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
