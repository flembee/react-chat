import { combineReducers } from '@reduxjs/toolkit';

import { language } from './language.reducer';
import { notification } from './notification.reducer';
import { ui } from './ui.reducer';
import { uploads } from './uploads.reducer';
import { user } from './user.reducer';

export const rootReducer = combineReducers({
    language,
    notification,
    ui,
    uploads,
    user,
});
