import React, {useContext, useEffect} from 'react';
import AppContext from '../context/AppContext';
import {
  URL_API,
  fetchPlaylistsStarted,
  fetchPlaylists,
} from '../context/Actions';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Spacer from './Spacer';
import {token} from '../service/Service';
import AddToPlaylistListItem from './AddToPlaylistListItem';

const AddToPlaylistList = props => {
  const {state, dispatch} = useContext(AppContext);
  const {playlists} = state;
  const {loading, error, data} = playlists;
  useEffect(() => {
    dispatch(fetchPlaylistsStarted());
    const url = `${URL_API}users/ibkakl9q7tiuml3wp3hpe0joq/playlists?access_token=${token}`;
    const request = {};
    fetchPlaylists(url, request, dispatch);
  }, []);

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
                <AddToPlaylistListItem
                  item={item}
                  key={item.id}
                  playlist_id={item.id}
                />
              )}
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
});
export default AddToPlaylistList;
