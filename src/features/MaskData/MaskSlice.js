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
    },
});

export default maskSlice.reducer;