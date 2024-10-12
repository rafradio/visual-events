import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MaskRowData } from './Data/maskRowData';

const initialState = {
    maskData: MaskRowData,
    currentMaskBlock: 3,
};

export const maskSlice = createSlice({
    name: 'mask',
    initialState,
    reducers: {
        maskChangeElement: (state, action) => {
            state.currentMaskBlock = action.payload;
        },
    },
});

export const { maskChangeElement } = maskSlice.actions

export default maskSlice.reducer;