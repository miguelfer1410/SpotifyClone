import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModalScreen from './src/screens/ModalScreen';
import TrackScreen from './src/screens/TrackScreen';
import AppProvider from './src/context/AppProvider';
import PlaylistScreen from './src/screens/PlaylistScreen';
import SearchScreen from './src/screens/SearchScreen';
import AddToPlaylistScreen from './src/screens/AddToPlaylistScreen';

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarInactiveBackgroundColor: '',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen component={SearchScreen} name={'Search'} />
      <Tab.Screen component={PlaylistScreen} name={'Playlist'} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  console.disableYellowBox = true;
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AndroidSpotify" component={Home} />
          <Stack.Screen name="ChangeModal" component={ModalScreen} />
          <Stack.Screen name="TrackScreen" component={TrackScreen} />
          <Stack.Screen name="AddScreen" component={AddToPlaylistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
export default App;
