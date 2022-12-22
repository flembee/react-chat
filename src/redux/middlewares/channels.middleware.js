import { message } from 'antd';

import {
    FETCH_CHANNELS_PROCESS,
    FETCH_CHANNELS_SUCCESS,
    FETCH_CHANNELS_ERROR,
    FETCH_CHANNEL_PROCESS,
    FETCH_CHANNEL_SUCCESS,
    FETCH_CHANNEL_ERROR,
    DELETE_CHANNELS_PROCESS,
    DELETE_CHANNELS_SUCCESS,
    DELETE_CHANNELS_ERROR,
    CREATE_CHANNEL_PROCESS,
    CREATE_CHANNEL_SUCCESS,
    CREATE_CHANNEL_ERROR,
    UPDATE_CHANNEL_PROCESS,
    UPDATE_CHANNEL_SUCCESS,
    UPDATE_CHANNEL_ERROR,
} from '../constants';

import {
    apiRequest,
    showMessageLoading, 
    hideMessage,
    deleteChannelModalClose
} from '../actions';

import { getStorage } from '../../helpers';

const URL = `${process.env.REACT_APP_API}/channels/`;

export const channelsProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_CHANNELS_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    URL,
                    null,
                    FETCH_CHANNELS_SUCCESS,
                    FETCH_CHANNELS_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case FETCH_CHANNEL_PROCESS:
            const { id } = action.payload;
            dispatch(
                apiRequest(
                    'GET',
                    `${URL}user/${id}`,
                    null,
                    FETCH_CHANNEL_SUCCESS,
                    FETCH_CHANNEL_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case DELETE_CHANNELS_PROCESS:
            const { ids } = action.payload;
            dispatch(
                apiRequest(
                    'DELETE',
                    URL,
                    ids,
                    DELETE_CHANNELS_SUCCESS,
                    DELETE_CHANNELS_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case CREATE_CHANNEL_PROCESS:
            dispatch(
                apiRequest(
                    'POST',
                    URL,
                    action.payload,
                    CREATE_CHANNEL_SUCCESS,
                    CREATE_CHANNEL_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case UPDATE_CHANNEL_PROCESS:
            const paramsId = action.payload.id;
            dispatch(
                apiRequest(
                    'PUT',
                    `${URL}${paramsId}`,
                    action.payload,
                    UPDATE_CHANNEL_SUCCESS,
                    UPDATE_CHANNEL_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getChannelsSuccess = () => (next) => (action) => {
    next(action);
};

export const getChannelsError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_CHANNELS_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const getChannelSuccess = () => (next) => (action) => {
    next(action);
};

export const getChannelError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_CHANNEL_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const deleteChannelsSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === DELETE_CHANNELS_SUCCESS) {
        dispatch(deleteChannelModalClose());
        message.success('Deleted success!', 1);
        dispatch(hideMessage());
    }
};

export const deleteChannelsError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === DELETE_CHANNELS_ERROR) {
    }
};

export const createdChannelSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === CREATE_CHANNEL_SUCCESS) {
        message.success('Created success!', 1);
        dispatch(hideMessage());
    }
};

export const createdChannelError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === CREATE_CHANNEL_ERROR) {
    }
};

export const updatedChannelSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === UPDATE_CHANNEL_SUCCESS) {
        message.success('Update success!', 1);
        dispatch(hideMessage());
    }
};

export const updatedChannelError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPDATE_CHANNEL_ERROR) {
    }
};

export const channelsMdl = [
    channelsProcess,
    getChannelsSuccess,
    getChannelsError,
    getChannelSuccess,
    getChannelError,
    deleteChannelsSuccess,
    createdChannelSuccess,
    createdChannelError,
    updatedChannelSuccess,
    updatedChannelError,
    deleteChannelsError,
];
