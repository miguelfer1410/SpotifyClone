import {
  FETCH_PLAYLISTS_STARTED,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_FAILURE,
  FETCH_SONGS_STARTED,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_TRACKS_STARTED,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  SET_TRACK_ID,
  SET_PLAYLIST_ID,
} from './Actions';

function reducer(state, action) {
  switch (action.type) {
    case FETCH_PLAYLISTS_STARTED:
      return {
        ...state,
        playlists: {
          loading: true,
          error: null,
          data: [],
        },
      };
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: {
          loading: false,
          error: null,
          data: action.payload.data,
        },
      };
    case FETCH_PLAYLISTS_FAILURE:
      return {
        ...state,
        playlists: {
          loading: false,
          error: action.payload.error,
          data: [],
        },
      };
    case FETCH_SONGS_STARTED:
      return {
        ...state,
        tracks: {
          loading: true,
          error: null,
          song: [],
        },
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        tracks: {
          loading: false,
          error: null,
          song: action.payload.song,
        },
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        tracks: {
          loading: false,
          error: action.payload.error,
          song: [],
        },
      };
    case FETCH_TRACKS_STARTED:
      return {
        ...state,
        playlist_tracks: {
          loading: true,
          error: null,
          tracks: [],
        },
      };
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        playlist_tracks: {
          loading: false,
          error: null,
          tracks: action.payload.tracks,
        },
      };
    case FETCH_TRACKS_FAILURE:
      return {
        ...state,
        playlist_tracks: {
          loading: false,
          error: action.payload.error,
          tracks: [],
        },
      };
    case SET_TRACK_ID:
      return {
        ...state,
        track_id: action.track_id,
      };
    case SET_PLAYLIST_ID:
      return {
        ...state,
        playlist_id: action.playlist_id,
      };
    default:
      return state;
  }
}

export default reducer;
