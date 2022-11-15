import { message } from 'antd';

import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    USER_LOGIN_PROCESS,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    CREATE_USER_PROCESS,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    UPDATE_USER_PROCESS,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR,
    UPDATE_PASSWORD_PROCESS,
    USER_LOGOUT,
} from '../constants';

import { apiRequest, showMessageLoading, hideMessage } from '../actions';
import { storage, getStorage } from '../../helpers';

const URL = `${process.env.REACT_APP_API}/auth`;
const USER_URL = `${process.env.REACT_APP_API}/users/`;

export const loginProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === USER_LOGIN_PROCESS) {
        dispatch(
            apiRequest(
                'POST',
                `${URL}/signin`,
                action.payload,
                FETCH_USER_SUCCESS,
                FETCH_USER_ERROR
            )
        );
        dispatch(showMessageLoading());
    }
};

export const loginSucess = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === FETCH_USER_SUCCESS) {
        storage.set('user', action.payload);
        message.success('Login success!', 1);
        dispatch(hideMessage());
    }
};

export const loginReject = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === FETCH_USER_ERROR) {
        message.error('Invalid email or password!', 1);
        dispatch(hideMessage());
    }
};

export const registerProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === CREATE_USER_PROCESS) {
        dispatch(
            apiRequest(
                'POST',
                `${URL}/signup`,
                action.payload,
                CREATE_USER_SUCCESS,
                CREATE_USER_ERROR
            )
        );
        dispatch(showMessageLoading());
    }
};

export const registerSucess = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === CREATE_USER_SUCCESS) {
        storage.set('user', action.payload);
        message.success('Register success!', 1);
        dispatch(hideMessage());
    }
};

export const registerReject = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === CREATE_USER_ERROR) {
        message.error('Invalid data!', 1);
    }
};

export const updateUserProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPDATE_USER_PROCESS) {
        const paramsId = action.payload.id;
        dispatch(
            apiRequest(
                'PUT',
                `${USER_URL}${paramsId}`,
                action.payload,
                UPDATE_USER_SUCCESS,
                UPDATE_USER_ERROR,
                getStorage.token()
            )
        );
        dispatch(showMessageLoading());
    }
};

export const updateUserSucess = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === UPDATE_USER_SUCCESS) {
        message.success('Update success!', 1);
        dispatch(hideMessage());
    }
};

export const updateUserError = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === UPDATE_USER_ERROR) {
        message.error('Invalid data!', 1);
    }
};

export const updatePasswordProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPDATE_PASSWORD_PROCESS) {
        const paramsId = action.payload.id;
        dispatch(
            apiRequest(
                'PUT',
                `${USER_URL}update-password/${paramsId}`,
                action.payload,
                UPDATE_PASSWORD_SUCCESS,
                UPDATE_PASSWORD_ERROR,
                getStorage.token()
            )
        );
        dispatch(showMessageLoading());
    }
};

export const updatePasswordSucess = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === UPDATE_PASSWORD_SUCCESS) {
        message.success('Update password success!', 1);
        dispatch(hideMessage());
    }
};

export const updatePasswordError = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type === UPDATE_PASSWORD_ERROR) {
        message.error('Invalid data!', 1);
    }
};

export const logoutSuccess = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type === USER_LOGOUT) {
        storage.remove('user');
        dispatch(hideMessage());

    }
};

export const userMdl = [
    loginProcess, 
    loginSucess, 
    loginReject, 
    registerProcess, 
    registerSucess, 
    registerReject, 
    updateUserProcess, 
    updateUserSucess,
    updateUserError, 
    updatePasswordProcess, 
    updatePasswordSucess, 
    updatePasswordError, 
    logoutSuccess,
];
