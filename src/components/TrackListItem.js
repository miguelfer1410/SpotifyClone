import {Image, StyleSheet, Text, View} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import React, {useContext} from 'react';
import {
  fetchDelete,
  fetchDeleteStarted,
  fetchPlaylistTracks,
  fetchPlaylistTracksStarted,
  URL_API,
} from '../context/Actions';
import AppContext from '../context/AppContext';
import {token} from '../service/Service';

const TrackListItem = props => {
  const {state, dispatch} = useContext(AppContext);
  const {item} = props;
  const {playlist_id} = state;
  const url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?access_token=${token}`;
  const deleteTrack = track_id => {
    dispatch(fetchDeleteStarted());
    const request = {
      method: 'DELETE',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tracks: [{uri: track_id}],
      }),
    };
    fetchDelete(url, request, dispatch).then(() => refreshPlaylist());
  };
  function refreshPlaylist() {
    dispatch(fetchPlaylistTracksStarted());
    const url = `${URL_API}playlists/${playlist_id}/tracks?access_token=${token}`;
    console.log(url);
    const request = {};
    fetchPlaylistTracks(url, request, dispatch);
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.track.album.images
            ? item.track.album.images[0].url
            : undefined,
        }}
        style={styles.image}
      />
      <View style={styles_text.container}>
        <Text style={styles_text.title}> {item.track.name}</Text>
        <Text style={styles_text.album}>
          {'Album: ' + item.track.album.name}
        </Text>
        <Text style={styles_text.artists}>
          {'Artists:' + item.track.artists
            ? item.track.artists[0].name
            : undefined}
        </Text>
        <MenuProvider style={styles.container} skipInstanceCheck>
          <Menu>
            <MenuTrigger
              text="Options"
              customStyles={{
                triggerWrapper: {
                  top: 0,
                  left: 150,
                },
              }}
            />
            <MenuOptions>
              <MenuOption
                text={'Delete Track'}
                onSelect={() => deleteTrack(item.track.uri)}
              />
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
    </View>
  );
};
export default TrackListItem;
const styles_text = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
  },
  album: {
    fontSize: 13,
  },
  artists: {
    fontSize: 13,
  },
});

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
    fontSize: 20,
  },
});
