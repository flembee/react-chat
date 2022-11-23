import { configureStore } from '@reduxjs/toolkit';

import {
    apiMdl,
    channelsMdl,
    messagesMdl,
    uploadsMdl,
    userMdl
} from './middlewares';
import { rootReducer } from './reducers';

if (process.env.NODE_ENV !== 'production') {
    // middleware.push();
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...channelsMdl,
        ...messagesMdl,
        ...uploadsMdl,
        ...userMdl,
        apiMdl
    ]
  })
