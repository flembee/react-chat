import { combineReducers } from '@reduxjs/toolkit';

import { ui } from './ui.reducer';
import { channels } from './channels.reducer';
import { messages } from './messages.reducer';
import { uploads } from './uploads.reducer';
import { user } from './user.reducer';

export const rootReducer = combineReducers({
    ui,
    channels,
    messages,
    uploads,
    user,
});
