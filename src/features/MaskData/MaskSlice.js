import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    maskData: [{number: '6', title: 'Наука'}],
};

export const maskSlice = createSlice({
    name: 'mask',
    initialState,
    reducers: {
    },
});

export default maskSlice.reducer;