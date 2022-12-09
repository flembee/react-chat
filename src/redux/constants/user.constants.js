const FETCH_USER_SUCCESS = '[auth] Login Success';
const FETCH_USER_ERROR = '[auth] Login Error';
const USER_LOGIN_PROCESS = '[auth] Login Process';

const CREATE_USER_SUCCESS = '[auth] Register Success';
const CREATE_USER_ERROR = '[auth] Register Error';
const CREATE_USER_PROCESS = '[auth] Register Process';

const USER_LOGOUT = '[auth] Logout';
const GET_USER_FROM_STORAGE = '[auth] Login With Storage Credentials';

const UPDATE_USER_PROCESS = '[auth] Process Update User';
const UPDATE_USER_SUCCESS = '[auth] Success Update User';
const UPDATE_USER_ERROR = '[auth] Error Update User';

const UPDATE_PASSWORD_PROCESS = '[auth] Process Update Password';
const UPDATE_PASSWORD_SUCCESS = '[auth] Success Update Password';
const UPDATE_PASSWORD_ERROR = '[auth] Error Update Password';

const FETCH_CONTACTS_PROCESS = '[users] Process Get Contacts List';
const FETCH_CONTACTS_SUCCESS = '[users] Success Get Contacts List';
const FETCH_CONTACTS_ERROR = '[users] Error Get Contacts List';

export {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    USER_LOGIN_PROCESS,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    CREATE_USER_PROCESS,
    UPDATE_USER_PROCESS,
    UPDATE_USER_SUCCESS,
    UPDATE_PASSWORD_PROCESS,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR,
    UPDATE_USER_ERROR,
    USER_LOGOUT,
    GET_USER_FROM_STORAGE,
    FETCH_CONTACTS_PROCESS,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_ERROR,
};
