import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import AppContext from '../context/AppContext';
import {
  fetchPlaylists,
  fetchPlaylistsStarted,
  URL_API,
} from '../context/Actions';
import {token} from '../service/Service';

const Header = props => {
  const {textStyle} = styles;
  const {dispatch} = useContext(AppContext);

  function refreshPlaylist() {
    dispatch(fetchPlaylistsStarted());
    const url = `${URL_API}users/ibkakl9q7tiuml3wp3hpe0joq/playlists?access_token=${token}`;
    const request = {};
    fetchPlaylists(url, request, dispatch);
  }
  return (
    <View style={styles.viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      <View style={styles.button}>
        <Button
          color={'#000000'}
          title={'Refresh'}
          onPress={() => refreshPlaylist()}
        />
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#d6d6d4',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 6,
  },
  textStyle: {
    top: 0,
    fontSize: 20,
    color: '#000',
  },
  button: {
    position: 'absolute',
    bottom: 7,
    left: 300,
    borderWidth: 1,
    borderRadius: 6,
  },
};

export default Header;
