import {configureStore} from '@reduxjs/toolkit';
import {reposReducer} from '../modules/repos/repos.slice';

export const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
});
