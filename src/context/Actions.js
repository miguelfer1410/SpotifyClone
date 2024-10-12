import {makeHTTPRequest} from '../service/Service';

export const URL_API = 'https://api.spotify.com/v1/';

export const FETCH_PLAYLISTS_STARTED = 'FETCH_PLAYLISTS_STARTED';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';
export const FETCH_PLAYLISTS_FAILURE = 'FETCH_PLAYLISTS_FAILURE';
export const FETCH_SONGS_STARTED = 'FETCH_SONGS_STARTED';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';
export const FETCH_TRACKS_STARTED = 'FETCH_TRACKS_STARTED';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';
export const FETCH_POST_STARTED = 'FETCH_POST_STARTED';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const FETCH_PUT_STARTED = 'FETCH_PUT_STARTED';
export const FETCH_PUT_SUCCESS = 'FETCH_PUT_SUCCESS';
export const FETCH_PUT_FAILURE = 'FETCH_PUT_FAILURE';
export const FETCH_ADD_STARTED = 'FETCH_ADD_STARTED';
export const FETCH_ADD_SUCCESS = 'FETCH_ADD_SUCCESS';
export const FETCH_ADD_FAILURE = 'FETCH_ADD_FAILURE';
export const FETCH_DELETE_STARTED = 'FETCH_DELETE_STARTED';
export const FETCH_DELETE_FAILURE = 'FETCH_DELETE_FAILURE';
export const FETCH_DELETE_SUCCESS = 'FETCH_DELETE_SUCCESS';
export const SET_TRACK_ID = 'SET_TRACK_ID';
export const SET_PLAYLIST_ID = 'SET_PLAYLIST_ID';

export function fetchPlaylists(url, request, dispatch) {
  const success = res => dispatch(fetchPlaylistsSuccess(res));
  const failure = err => dispatch(fetchPlaylistsFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchSongs(url, request, dispatch) {
  const success = res => dispatch(fetchSongsSuccess(res));
  const failure = err => dispatch(fetchSongsFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchPlaylistTracks(url, request, dispatch) {
  const success = res => dispatch(fetchPlaylistTracksSuccess(res));
  const failure = err => dispatch(fetchPlaylistTracksFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}
export function fetchPostPlaylist(url, request, dispatch) {
  const success = res => dispatch(fetchPostPlaylistSuccess(res));
  const failure = err => dispatch(fetchPostPlaylistFailure(err.message));
  return fetch(url, request)
    .then(response => response.json())
    .then(res => success(res))
    .catch(err => failure(err.message));
}
export function fetchPutPlaylist(url, request, dispatch) {
  const success = res => dispatch(fetchPutPlaylistSuccess(res));
  const failure = err => dispatch(fetchPutPlaylistFailure(err.message));
  return fetch(url, request)
    .then(response => response.json())
    .then(res => success(res))
    .catch(err => failure(err.message));
}
export function fetchAddPlaylist(url, request, dispatch) {
  const success = res => dispatch(fetchAddSuccess(res));
  const failure = err => dispatch(fetchAddPlaylistFailure(err.message));
  makeHTTPRequest(url, request, success, failure);
}

export function fetchDelete(url, request, dispatch) {
  const success = res => dispatch(fetchDeleteSuccess(res));
  const failure = err => dispatch(fetchDeleteFailure(err.message));
  return fetch(url, request)
    .then(response => response.json())
    .then(res => success(res))
    .catch(err => failure(err.message));
}

export function setTrackId(track_id) {
  return {
    type: SET_TRACK_ID,
    track_id,
  };
}

export function setPlaylistId(playlist_id) {
  return {
    type: SET_PLAYLIST_ID,
    playlist_id,
  };
}
export function fetchPlaylistsStarted() {
  return {
    type: FETCH_PLAYLISTS_STARTED,
  };
}
export function fetchSongsStarted() {
  return {
    type: FETCH_SONGS_STARTED,
  };
}
export function fetchPlaylistTracksStarted() {
  return {
    type: FETCH_TRACKS_STARTED,
  };
}
export function fetchPostPlaylistStarted() {
  return {
    type: FETCH_POST_STARTED,
  };
}
export function fetchPutPlaylistStarted() {
  return {
    type: FETCH_PUT_STARTED,
  };
}
export function fetchAddPlaylistStarted() {
  return {
    type: FETCH_ADD_STARTED,
  };
}

export function fetchDeleteStarted() {
  return {
    type: FETCH_DELETE_STARTED,
  };
}

export function fetchPlaylistsSuccess(playlists) {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: {
      data: [...playlists.items],
    },
  };
}
export function fetchSongsSuccess(tracks) {
  return {
    type: FETCH_SONGS_SUCCESS,
    payload: {
      song: [...tracks.tracks.items],
    },
  };
}
export function fetchPlaylistTracksSuccess(tracks) {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: {
      tracks: [...tracks.items],
    },
  };
}
export function fetchPostPlaylistSuccess() {
  return {
    type: FETCH_POST_SUCCESS,
  };
}
export function fetchAddSuccess() {
  return {
    type: FETCH_ADD_SUCCESS,
  };
}
export function fetchPutPlaylistSuccess() {
  return {
    type: FETCH_PUT_SUCCESS,
  };
}

export function fetchDeleteSuccess() {
  return {
    type: FETCH_DELETE_SUCCESS,
  };
}

export function fetchPlaylistsFailure(message) {
  return {
    type: FETCH_PLAYLISTS_FAILURE,
    payload: {
      error: message,
    },
  };
}
export function fetchSongsFailure(message) {
  return {
    type: FETCH_SONGS_FAILURE,
    payload: {
      error: message,
    },
  };
}
export function fetchPlaylistTracksFailure(message) {
  return {
    type: FETCH_TRACKS_FAILURE,
    payload: {
      error: message,
    },
  };
}
export function fetchPostPlaylistFailure(message) {
  return {
    type: FETCH_POST_FAILURE,
    payload: {
      error: message,
    },
  };
}
export function fetchPutPlaylistFailure(message) {
  return {
    type: FETCH_PUT_FAILURE,
    payload: {
      error: message,
    },
  };
}
export function fetchAddPlaylistFailure(message) {
  return {
    type: FETCH_ADD_FAILURE,
    payload: {
      error: message,
    },
  };
}

export function fetchDeleteFailure(message) {
  return {
    type: FETCH_DELETE_FAILURE,
    payload: {
      error: message,
    },
  };
}
