import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {token} from '../service/Service';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../context/AppContext';
import {fetchAddPlaylist, fetchAddPlaylistStarted} from '../context/Actions';

const AddToPlaylistListItem = props => {
  const {state, dispatch} = useContext(AppContext);
  const {track_id} = state;
  const {item} = props;
  const navigation = useNavigation();
  const AddTrack = playlist_id => {
    dispatch(fetchAddPlaylistStarted());
    const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?access_token=${token}&uris=${track_id}`;
    console.log(url);
    const request = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    fetchAddPlaylist(url, request, dispatch);
  };
  const add = () => {
    AddTrack(item.id);
    navigation.navigate('Search');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => add()}>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  title: {
    top: 5,
    left: 20,
    fontSize: 20,
  },
});
export default AddToPlaylistListItem;
