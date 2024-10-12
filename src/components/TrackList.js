import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {
  URL_API,
  fetchPlaylistTracksStarted,
  fetchPlaylistTracks,
} from '../context/Actions';
import {FlatList} from 'react-native';
import TrackListItem from './TrackListItem';
import Spacer from './Spacer';
import {token} from '../service/Service';

const TrackList = props => {
  const {state, dispatch} = useContext(AppContext);
  const {playlist_tracks, playlist_id} = state;
  const {tracks} = playlist_tracks;
  useEffect(() => {
    dispatch(fetchPlaylistTracksStarted());
    const url = `${URL_API}playlists/${playlist_id}/tracks?access_token=${token}`;
    console.log(url);
    const request = {};
    fetchPlaylistTracks(url, request, dispatch);
  }, []);
  return (
    <FlatList
      data={tracks}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <Spacer />}
      renderItem={({item}) => (
        <TrackListItem item={item} key={item.id} playlist_id={playlist_id} />
      )}
    />
  );
};
export default TrackList;
