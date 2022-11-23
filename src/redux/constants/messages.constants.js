const FETCH_MESSAGES_PROCESS = '[messages] Process Get Messages List';
const FETCH_MESSAGES_SUCCESS = '[messages] Success Get Messages List';
const FETCH_MESSAGES_ERROR = '[messages] Error Get Messages List';

const FETCH_MESSAGE_PROCESS = '[messages] Process Get Message by id';
const FETCH_MESSAGE_SUCCESS = '[messages] Success Get Message by id';
const FETCH_MESSAGE_ERROR = '[messages] Error Get Message by id';

const DELETE_MESSAGES_PROCESS = '[messages] Process Delete Selected Messages';
const DELETE_MESSAGES_SUCCESS = '[messages] Success Deleted Selected Messages';
const DELETE_MESSAGES_ERROR = '[messages] Error Deleted Selected Messages';

const CREATE_MESSAGE_PROCESS = '[messages] Process Create Message';
const CREATE_MESSAGE_SUCCESS = '[messages] Success Create Message';
const CREATE_MESSAGE_ERROR = '[messages] Error Create Message';

const UPDATE_MESSAGE_PROCESS = '[messages] Process Update Message';
const UPDATE_MESSAGE_SUCCESS = '[messages] Success Update Message';
const UPDATE_MESSAGE_ERROR = '[messages] Error Update Message';

const DELETE_MESSAGE_MODAL_OPEN = '[messages] Open Message Modal Delete';
const DELETE_MESSAGE_MODAL_CLOSE = '[messages] Close Message Modal Delete';

export {
    FETCH_MESSAGES_PROCESS,
    FETCH_MESSAGES_ERROR,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGE_PROCESS,
    FETCH_MESSAGE_ERROR,
    FETCH_MESSAGE_SUCCESS,
    DELETE_MESSAGES_PROCESS,
    DELETE_MESSAGES_SUCCESS,
    DELETE_MESSAGES_ERROR,
    CREATE_MESSAGE_PROCESS,
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_ERROR,
    UPDATE_MESSAGE_PROCESS,
    UPDATE_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_ERROR,
    DELETE_MESSAGE_MODAL_OPEN,
    DELETE_MESSAGE_MODAL_CLOSE,
};
