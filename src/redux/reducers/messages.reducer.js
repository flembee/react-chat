import { mergeAll } from 'ramda';
import days from 'dayjs';

import {
    FETCH_MESSAGES_PROCESS,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGE_PROCESS,
    FETCH_MESSAGE_SUCCESS,
    DELETE_MESSAGES_PROCESS,
    DELETE_MESSAGES_SUCCESS,
    DELETE_MESSAGES_ERROR,
    CREATE_MESSAGE_PROCESS,
    CREATE_MESSAGE_SUCCESS,
    UPDATE_MESSAGE_PROCESS,
    UPDATE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_MODAL_OPEN,
    DELETE_MESSAGE_MODAL_CLOSE
} from '../constants';

const initialState = {
    messages: [],
    isFetching: true,
    singleMessage: {},
    deleteMessageModal: {
        modal: false,
        cId: null,
    },
};

export const messages = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_MESSAGES_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.payload.docs.map((message) => ({
                    ...message,
                    createdAt: days(message.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(message.updatedAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case FETCH_MESSAGE_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: action.payload.map((message) => ({
                    ...message,
                    createdAt: days(message.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(message.updatedAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case DELETE_MESSAGES_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case DELETE_MESSAGES_ERROR:
            return {
                ...state,
                isFetching: false,
            };
        case DELETE_MESSAGES_SUCCESS:
            return {
                ...state,
                messages: action.payload.result.messages.map((message) => ({
                    ...message,
                    createdAt: days(message.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(message.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case CREATE_MESSAGE_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: action.payload.docs.map((message) => ({
                    ...message,
                    createdAt: days(message.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(message.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case UPDATE_MESSAGE_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_MESSAGE_SUCCESS:
            return {
                ...state,
                messages: state.messages.map((message) => {
                    const check = message._id === action.payload._id;
                    if (check) {
                        message = mergeAll([
                            message,
                            {
                                ...action.payload,
                                createdAt: days(message.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                                updatedAt: days(message.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                            },
                        ]);
                    }
                    return message;
                }),
                isFetching: false,
            };
        case DELETE_MESSAGE_MODAL_OPEN:
            return {
                ...state,
                deleteMessageModal: {
                    modal: true,
                    cId: action.payload.cId,
                }
            };
        case DELETE_MESSAGE_MODAL_CLOSE:
            return {
                ...state,
                deleteMessageModal: {
                    modal: false,
                    cId: null,
                }
            };
        default:
            return state;
    }
};
