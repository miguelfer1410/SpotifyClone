import React, {useContext, useEffect, useState} from 'react';
import AppContext from '../context/AppContext';
import {
  URL_API,
  fetchPlaylistsStarted,
  fetchPlaylists,
  fetchPostPlaylist,
  fetchPostPlaylistStarted,
} from '../context/Actions';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import PlaylistListItem from './PlaylistListItem';
import Spacer from './Spacer';
import {token} from '../service/Service';

const PlaylistList = () => {
  const {state, dispatch} = useContext(AppContext);
  const {playlists} = state;
  const {loading, error, data} = playlists;
  const [name, setName] = useState('');

  useEffect(() => {
    dispatch(fetchPlaylistsStarted());
    const url = `${URL_API}users/ibkakl9q7tiuml3wp3hpe0joq/playlists?access_token=${token}`;
    const request = {};
    fetchPlaylists(url, request, dispatch);
  }, []);

  const postPlaylist = text => {
    dispatch(fetchPostPlaylistStarted());
    const url = `${URL_API}users/ibkakl9q7tiuml3wp3hpe0joq/playlists?access_token=${token}`;
    const request_1 = {};
    const request = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: text,
      }),
    };
    fetchPostPlaylist(url, request, dispatch).then(() =>
      fetchPlaylists(url, request_1, dispatch),
    );
  };

  if (loading === true) {
    return (
      <View style={styles.item}>
        <Text>Loading ....</Text>
      </View>
    );
  } else {
    if (error !== null) {
      return (
        <View style={styles.item}>
          <Text>Error ....</Text>
        </View>
      );
    } else {
      if (data.length > 0) {
        return (
          <View>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={() => <Spacer />}
              renderItem={({item}) => (
                <PlaylistListItem item={item} key={item.id} />
              )}
            />
            <TextInput
              placeholder={'Playlist Name...'}
              value={name}
              onChangeText={text => setName(text)}
            />
            <Button
              color={'#000000'}
              title={'Add Playlist'}
              onPress={() => postPlaylist(name)}
            />
          </View>
        );
      } else {
        return (
          <View style={styles.item}>
            <Text>No data ....</Text>
          </View>
        );
      }
    }
  }
};
const styles = StyleSheet.create({
  item: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  button: {
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 6,
    right: 270,
    top: 290,
  },
});
export default PlaylistList;
