import { configureStore, combineReducers } from '@reduxjs/toolkit';
import maskReducer from '../features/MaskData/maskSlice';

export const store = configureStore({
    reducer: {
        mask: maskReducer,
    },
});