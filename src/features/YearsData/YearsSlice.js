import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YearsRowData } from './Data/YearsRowData';

const initialState = {
    yearsData: YearsRowData,
    currentYearBlock: 0,
}

export const yearsSlice = createSlice({
    name: 'years',
    initialState,
    reducers: {
    },
});

export default yearsSlice.reducer;