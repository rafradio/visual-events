import { configureStore, combineReducers } from '@reduxjs/toolkit';
import maskReducer from '../features/MaskData/maskSlice';
import yearsReducer from '../features/YearsData/YearsSlice'

export const store = configureStore({
    reducer: {
        mask: maskReducer,
        years: yearsReducer,
    },
});