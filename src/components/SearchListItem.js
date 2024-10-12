import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../context/AppContext';
import {setTrackId} from '../context/Actions';

const SearchListItem = props => {
  const navigation = useNavigation();
  const {dispatch} = useContext(AppContext);
  const {item} = props;

  function handleTrackIdUpdate(newTrackId) {
    dispatch(setTrackId(newTrackId));
    navigation.navigate('AddScreen');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: item.album.images ? item.album.images[0].url : undefined,
        }}
        style={styles.image}
      />
      <View style={styles_text.container}>
        <Text style={styles_text.title}> {item.name}</Text>
        <Text style={styles_text.album}>{'Album: ' + item.album.name}</Text>
        <Text style={styles_text.artists}>
          {'Artists:' + item.artists ? item.artists[0].name : undefined}
        </Text>
      </View>
      <MenuProvider style={styles.container} skipInstanceCheck>
        <Menu>
          <MenuTrigger
            text="Options"
            customStyles={{
              triggerWrapper: {
                top: -20,
                left: 70,
              },
            }}
          />
          <MenuOptions>
            <MenuOption
              text="Add to Playlist"
              onSelect={() => handleTrackIdUpdate(item.uri)}
            />
          </MenuOptions>
        </Menu>
      </MenuProvider>
    </View>
  );
};

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
export default SearchListItem;
