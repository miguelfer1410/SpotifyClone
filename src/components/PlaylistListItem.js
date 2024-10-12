import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../context/AppContext';
import {setPlaylistId} from '../context/Actions';

const PlaylistListItem = props => {
  const {dispatch} = useContext(AppContext);
  const {item} = props;
  const navigation = useNavigation();

  function handlePlaylistIdUpdate(newPlaylistId) {
    dispatch(setPlaylistId(newPlaylistId));
    navigation.navigate('TrackScreen');
  }
  function handlePlaylistIdUpdateChange(newPlaylistId) {
    dispatch(setPlaylistId(newPlaylistId));
    navigation.navigate('ChangeModal');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePlaylistIdUpdate(item.id)}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.menu}>
          <MenuProvider>
            <Menu>
              <MenuTrigger
                text="Options"
                customStyles={{
                  triggerWrapper: {
                    top: -24,
                    width: 100,
                    height: 40,
                  },
                }}
              />
              <MenuOptions>
                <MenuOption
                  text="Change Name"
                  onSelect={() => handlePlaylistIdUpdateChange(item.id)}
                />
              </MenuOptions>
            </Menu>
          </MenuProvider>
        </View>
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
    fontSize: 20,
  },
  menu: {
    left: 200,
  },
});
export default PlaylistListItem;
