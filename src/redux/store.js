import { configureStore } from '@reduxjs/toolkit';

import {
    apiMdl,
    languageMdl,
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
        ...languageMdl,
        ...uploadsMdl,
        ...userMdl,
        apiMdl
    ]
  })
