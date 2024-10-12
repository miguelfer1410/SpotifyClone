import React, {useContext, useState} from 'react';
import AppContext from '../context/AppContext';
import {URL_API, fetchSongsStarted, fetchSongs} from '../context/Actions';
import {FlatList, View} from 'react-native';
import SearchListItem from './SearchListItem';
import Spacer from './Spacer';
import SearchBar from './SearchBar';
import {token} from '../service/Service';

const SearchList = () => {
  const {state, dispatch} = useContext(AppContext);
  const {tracks} = state;
  const [query, setQuery] = useState('');
  const {song} = tracks;

  const fetchSong = () => {
    dispatch(fetchSongsStarted());
    const url = `${URL_API}search?access_token=${token}&type=track&limit=10&q=${query}`;
    const request = {};
    fetchSongs(url, request, dispatch);
  };

  function onChangeQuery(text) {
    setQuery(text);
    fetchSong();
  }

  return (
    <View>
      <SearchBar
        placeholder="Search Song"
        text={query}
        onChange={text => onChangeQuery(text)}
      />
      <FlatList
        data={song}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Spacer />}
        renderItem={({item}) => <SearchListItem item={item} key={item.id} />}
      />
    </View>
  );
};
export default SearchList;
