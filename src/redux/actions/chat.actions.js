import { CLOSE_MENU, SHOW_MESSAGE_LOADING, HIDE_MESSAGE, FILTER_SPACE, CLOSE_SETTINGS, SET_TOGGLER } from '../constants';

const setToggler = (payload) => ({
    type: SET_TOGGLER,
    payload,
});

const closeMenu = (payload) => ({
    type: CLOSE_MENU,
    payload,
});

const showMessageLoading = () => ({
    type: SHOW_MESSAGE_LOADING,
});

const hideMessage = () => ({
    type: HIDE_MESSAGE,
});

const filterSpace = (payload) => ({
    type: FILTER_SPACE,
    payload,
});

const closeSettings = (payload) => ({
    type: CLOSE_SETTINGS,
    payload,
});

export {
    setToggler,
    closeMenu,
    showMessageLoading,
    hideMessage,
    filterSpace,
    closeSettings,
};
