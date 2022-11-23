import {
    FETCH_MESSAGES_PROCESS,
    FETCH_MESSAGE_PROCESS,
    DELETE_MESSAGES_PROCESS,
    CREATE_MESSAGE_PROCESS,
    UPDATE_MESSAGE_PROCESS,
    DELETE_MESSAGE_MODAL_OPEN,
    DELETE_MESSAGE_MODAL_CLOSE
} from '../constants';

const getMessagesListProcess = (payload) => ({
    type: FETCH_MESSAGES_PROCESS,
    payload,
});

const getMessageProcess = (payload) => ({
    type: FETCH_MESSAGE_PROCESS,
    payload,
});

const deleteMessagesProcess = (payload) => ({
    type: DELETE_MESSAGES_PROCESS,
    payload,
});

const createNewMessage = (payload) => ({
    type: CREATE_MESSAGE_PROCESS,
    payload,
});

const updateMessage = (payload) => ({
    type: UPDATE_MESSAGE_PROCESS,
    payload,
});

const deleteMessageModalOpen = (payload) => ({
    type: DELETE_MESSAGE_MODAL_OPEN,
    payload,
});

const deleteMessageModalClose = (payload) => ({
    type: DELETE_MESSAGE_MODAL_CLOSE,
    payload,
});

export {
    getMessagesListProcess,
    getMessageProcess,
    deleteMessagesProcess,
    createNewMessage,
    updateMessage,
    deleteMessageModalOpen,
    deleteMessageModalClose,
};
