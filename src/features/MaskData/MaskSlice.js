import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MaskRowData } from './Data/maskRowData';

const initialState = {
    maskData: MaskRowData,
    currentMaskBlock: [0],
    angle: 0,
};

export const maskSlice = createSlice({
    name: 'mask',
    initialState,
    reducers: {
        maskChangeElement: (state, action) => {
            while (state.currentMaskBlock.length) {state.currentMaskBlock.pop()}
            state.currentMaskBlock.push(action.payload);
            state.angle += 90;
            // state.currentMaskBlock[0] = action.payload;
        },
        maskAddElement: (state, action) => {
            state.currentMaskBlock.push(action.payload);
        },
        maskRemoveElement: (state, action) => {
            state.currentMaskBlock.pop();
        }
    },
});

export const { maskChangeElement, maskAddElement, maskRemoveElement } = maskSlice.actions

export default maskSlice.reducer;