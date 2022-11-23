import { mergeAll } from 'ramda';
import days from 'dayjs';

import {
    FETCH_CHANNELS_PROCESS,
    FETCH_CHANNELS_SUCCESS,
    FETCH_CHANNEL_PROCESS,
    FETCH_CHANNEL_SUCCESS,
    DELETE_CHANNELS_PROCESS,
    DELETE_CHANNELS_SUCCESS,
    DELETE_CHANNELS_ERROR,
    CREATE_CHANNEL_PROCESS,
    CREATE_CHANNEL_SUCCESS,
    UPDATE_CHANNEL_PROCESS,
    UPDATE_CHANNEL_SUCCESS,
    DELETE_CHANNEL_MODAL_OPEN,
    DELETE_CHANNEL_MODAL_CLOSE
} from '../constants';

const initialState = {
    channels: [],
    isFetching: true,
    singleChannel: {},
    deleteChannelModal: {
        modal: false,
        cId: null,
    },
};

export const channels = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_CHANNELS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_CHANNELS_SUCCESS:
            return {
                ...state,
                channels: action.payload.docs.map((channel) => ({
                    ...channel,
                    createdAt: days(channel.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(channel.updatedAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case FETCH_CHANNEL_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_CHANNEL_SUCCESS:
            return {
                ...state,
                singleChannel: action.payload,
                isFetching: false,
            };
        case DELETE_CHANNELS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case DELETE_CHANNELS_ERROR:
            return {
                ...state,
                isFetching: false,
            };
        case DELETE_CHANNELS_SUCCESS:
            return {
                ...state,
                channels: action.payload.result.channels.map((channel) => ({
                    ...channel,
                    createdAt: days(channel.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(channel.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case CREATE_CHANNEL_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case CREATE_CHANNEL_SUCCESS:
            return {
                ...state,
                channels: action.payload.docs.map((channel) => ({
                    ...channel,
                    createdAt: days(channel.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(channel.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case UPDATE_CHANNEL_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_CHANNEL_SUCCESS:
            return {
                ...state,
                channels: state.channels.map((channel) => {
                    const check = channel._id === action.payload._id;
                    if (check) {
                        channel = mergeAll([
                            channel,
                            {
                                ...action.payload,
                                createdAt: days(channel.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                                updatedAt: days(channel.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                            },
                        ]);
                    }
                    return channel;
                }),
                isFetching: false,
            };
        case DELETE_CHANNEL_MODAL_OPEN:
            return {
                ...state,
                deleteChannelModal: {
                    modal: true,
                    cId: action.payload.cId,
                }
            };
        case DELETE_CHANNEL_MODAL_CLOSE:
            return {
                ...state,
                deleteChannelModal: {
                    modal: false,
                    cId: null,
                }
            };
        default:
            return state;
    }
};
