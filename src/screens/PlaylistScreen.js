import React from 'react';
import {View, StyleSheet} from 'react-native';
import PlaylistList from '../components/PlaylistList';
import Header from '../components/Header';

const PlaylistScreen = () => {
  return (
    <View style={styles.container}>
      <Header headerText={'Playlist Screen'} />
      <PlaylistList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});

export default PlaylistScreen;
