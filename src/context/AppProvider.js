import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {Provider} from './AppContext';
import reducer from './Reducer';

const initialState = {
  playlists: {
    loading: true,
    error: null,
    data: [],
  },
  tracks: {
    loading: true,
    error: null,
    song: [],
  },
  playlist_tracks: {
    loading: true,
    error: null,
    tracks: [],
  },
  playlist_id: '',
  track_id: '',
};

const AppProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </Provider>
  );
};
AppProvider.propTypes = {
  children: PropTypes.node,
};

export default AppProvider;
