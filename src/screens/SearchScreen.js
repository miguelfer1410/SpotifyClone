import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchList from '../components/SearchList';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default SearchScreen;
