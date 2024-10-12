import React, {useContext, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Modal} from '../components/Modal';
import {useNavigation, useRoute} from '@react-navigation/native';
import {token} from '../service/Service';
import {
  fetchPlaylists,
  fetchPlaylistsStarted,
  fetchPutPlaylist,
  fetchPutPlaylistStarted,
  URL_API,
} from '../context/Actions';
import AppContext from '../context/AppContext';

const ModalScreen = () => {
  const navigation = useNavigation();
  const {state, dispatch} = useContext(AppContext);
  const {playlist_id} = state;
  const [isModalVisible] = React.useState(true);

  const [newName, setNewName] = useState('');

  console.log(playlist_id);

  const putPlaylist = text => {
    dispatch(fetchPutPlaylistStarted());
    const url = `https://api.spotify.com/v1/playlists/${playlist_id}?access_token=${token}`;
    const request = {
      method: 'PUT',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: text,
      }),
    };
    fetchPutPlaylist(url, request, dispatch).then(() => refreshPlaylist());
  };
  const refreshPlaylist = () => {
    dispatch(fetchPlaylistsStarted());
    const url = `${URL_API}users/ibkakl9q7tiuml3wp3hpe0joq/playlists?access_token=${token}`;
    const request = {};
    fetchPlaylists(url, request, dispatch);
  };

  const put = () => {
    putPlaylist(newName);
    navigation.navigate('Playlist');
    refreshPlaylist();
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <View style={styles.modal}>
            <Modal.Header title="Change Name Of Playlist" />
            <Modal.Body>
              <TextInput
                style={styles.input}
                placeholder="New Name"
                onChangeText={text => setNewName(text)}
                value={newName}
              />
              <View style={{flexDirection: 'row'}}>
                <Button
                  style={styles.button}
                  title={'Save'}
                  onPress={() => put()}
                />
                <View style={styles.space} />
                <Button
                  style={styles.button}
                  title={'Cancel'}
                  onPress={() => navigation.navigate('Playlist')}
                />
              </View>
            </Modal.Body>
          </View>
        </Modal.Container>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    paddingTop: 5,
    borderColor: 'grey',
    borderBottomWidth: 0,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
    padding: 30,
  },
  modal: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    width: 20,
    height: 20,
  },
});
export default ModalScreen;
