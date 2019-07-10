import streams from '../api/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

export const signIn = userId => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const createStream = formValue => async dispach => {
  const response = await streams.post('/streams', formValue);
  dispach({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispach => {
  const response = await streams.get('/streams');
  dispach({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispach => {
  const response = await streams.get(`/streams/${id}`);
  dispach({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValue) => async dispach => {
  const response = await streams.put(`/streams/${id}`, formValue);
  dispach({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispach => {
  await streams.delete(`/streams/${id}`);
  dispach({ type: DELETE_STREAM, payload: id });
};
