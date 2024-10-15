import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MaskRowData } from './Data/maskRowData';

const initialState = {
    maskData: MaskRowData,
    currentMaskBlock: [0],
    angle: 0,
    currentAngles: [135, 180, 225, 315, 0, 45],
};

export const maskSlice = createSlice({
    name: 'mask',
    initialState,
    reducers: {
        maskChangeElement: {
            reducer(state, action) {
                while (state.currentMaskBlock.length) {state.currentMaskBlock.pop()}
                state.currentMaskBlock.push(action.payload.num);
                state.angle += action.payload.diff;
                state.currentAngles = state.currentAngles.map((elm) => elm+action.payload.diff);
                // state.currentAngles.forEach((elm, ind) => {console.log(elm)});
                // state.currentMaskBlock[0] = action.payload;
            },
            prepare(number, difference) {
                return {
                  payload: { num: number, diff: difference }
                }
              }
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