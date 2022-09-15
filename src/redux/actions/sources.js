import {
  SET_SOURCES,
  SET_SOURCES_STATE,
  SET_SOURCES_LOADING_STATUS,
} from './types';
import sourcesApi from '../../api/sources';

export const setSourcesState = (sources) => (dispatch) => {
  dispatch({
    type: SET_SOURCES_STATE,
    payload: sources,
  });
};

export const setSourcesLoadingStatus = (status) => (dispatch) => {
  dispatch({
    type: SET_SOURCES_LOADING_STATUS,
    payload: status,
  });
};

export const getSources = () => async (dispatch) => {
  try {
    const response = await sourcesApi.createSource();
    dispatch({
      type: SET_SOURCES,
      payload: response.data.time,
    });
  } catch (e) {
    console.log(e);
  }
};
