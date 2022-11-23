import { message } from 'antd';

import {
    FETCH_MESSAGES_PROCESS,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_ERROR,
    FETCH_MESSAGE_PROCESS,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_ERROR,
    DELETE_MESSAGES_PROCESS,
    DELETE_MESSAGES_SUCCESS,
    DELETE_MESSAGES_ERROR,
    CREATE_MESSAGE_PROCESS,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_ERROR,
    UPDATE_MESSAGE_PROCESS,
    UPDATE_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_ERROR,
} from '../constants';

import {
    apiRequest,
    errorCreateNotification,
    errorUpdateNotification,
    errorDeleteNotification,
    clearNotification,
    showMessageLoading, 
    hideMessage,
    deleteMessageModalClose
} from '../actions';

import { getStorage } from '../../helpers';

const URL = `${process.env.REACT_APP_API}/messages/`;

export const messagesProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_MESSAGES_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    URL,
                    null,
                    FETCH_MESSAGES_SUCCESS,
                    FETCH_MESSAGES_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case FETCH_MESSAGE_PROCESS:
            const { id } = action.payload;
            dispatch(
                apiRequest(
                    'GET',
                    `${URL}channel/${id}`,
                    null,
                    FETCH_MESSAGE_SUCCESS,
                    FETCH_MESSAGE_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case DELETE_MESSAGES_PROCESS:
            const { ids } = action.payload;
            dispatch(
                apiRequest(
                    'DELETE',
                    URL,
                    ids,
                    DELETE_MESSAGES_SUCCESS,
                    DELETE_MESSAGES_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case CREATE_MESSAGE_PROCESS:
            dispatch(
                apiRequest(
                    'POST',
                    URL,
                    action.payload,
                    CREATE_MESSAGE_SUCCESS,
                    CREATE_MESSAGE_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case UPDATE_MESSAGE_PROCESS:
            const paramsId = action.payload.id;
            dispatch(
                apiRequest(
                    'PUT',
                    `${URL}${paramsId}`,
                    action.payload,
                    UPDATE_MESSAGE_SUCCESS,
                    UPDATE_MESSAGE_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getMessagesSuccess = () => (next) => (action) => {
    next(action);
};

export const getMessagesError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_MESSAGES_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const getMessageSuccess = () => (next) => (action) => {
    next(action);
};

export const getMessageError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_MESSAGE_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const deleteMessagesSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === DELETE_MESSAGES_SUCCESS) {
        dispatch(deleteMessageModalClose());
        message.success('Deleted success!', 1);
        dispatch(hideMessage());
    }
};

export const deleteMessagesError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === DELETE_MESSAGES_ERROR) {
        dispatch(errorDeleteNotification(action.payload));
        dispatch(clearNotification());
    }
};

export const createdMessageSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === CREATE_MESSAGE_SUCCESS) {
        message.success('Created success!', 1);
        dispatch(hideMessage());
    }
};

export const createdMessageError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === CREATE_MESSAGE_ERROR) {
        dispatch(errorCreateNotification());
        dispatch(clearNotification());
    }
};

export const updatedMessageSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === UPDATE_MESSAGE_SUCCESS) {
        message.success('Update success!', 1);
        dispatch(hideMessage());
    }
};

export const updatedMessageError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPDATE_MESSAGE_ERROR) {
        dispatch(errorUpdateNotification());
        dispatch(clearNotification());
    }
};

export const messagesMdl = [
    messagesProcess,
    getMessagesSuccess,
    getMessagesError,
    getMessageSuccess,
    getMessageError,
    deleteMessagesSuccess,
    createdMessageSuccess,
    createdMessageError,
    updatedMessageSuccess,
    updatedMessageError,
    deleteMessagesError,
];
