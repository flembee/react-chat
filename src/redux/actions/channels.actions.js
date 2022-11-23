import {
    FETCH_CHANNELS_PROCESS,
    FETCH_CHANNEL_PROCESS,
    DELETE_CHANNELS_PROCESS,
    CREATE_CHANNEL_PROCESS,
    UPDATE_CHANNEL_PROCESS,
    DELETE_CHANNEL_MODAL_OPEN,
    DELETE_CHANNEL_MODAL_CLOSE
} from '../constants';

const getChannelsListProcess = (payload) => ({
    type: FETCH_CHANNELS_PROCESS,
    payload,
});

const getChannelProcess = (payload) => ({
    type: FETCH_CHANNEL_PROCESS,
    payload,
});

const deleteChannelsProcess = (payload) => ({
    type: DELETE_CHANNELS_PROCESS,
    payload,
});

const createNewChannel = (payload) => ({
    type: CREATE_CHANNEL_PROCESS,
    payload,
});

const updateChannel = (payload) => ({
    type: UPDATE_CHANNEL_PROCESS,
    payload,
});

const deleteChannelModalOpen = (payload) => ({
    type: DELETE_CHANNEL_MODAL_OPEN,
    payload,
});

const deleteChannelModalClose = (payload) => ({
    type: DELETE_CHANNEL_MODAL_CLOSE,
    payload,
});

export {
    getChannelsListProcess,
    getChannelProcess,
    deleteChannelsProcess,
    createNewChannel,
    updateChannel,
    deleteChannelModalOpen,
    deleteChannelModalClose,
};
