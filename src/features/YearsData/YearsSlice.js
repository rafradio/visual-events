import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YearsRowData } from './Data/YearsRowData';

const initialState = {
    yearsData: YearsRowData,
    currentYearBlock: 0,
    diffYears: {first: [1981, 1986], last: [1981, 1986]},
    flagChangingYears: false,
}

export const yearsSlice = createSlice({
    name: 'years',
    initialState,
    reducers: {
        yearChangeFlag: (state, action) => {
            state.flagChangingYears = state.flagChangingYears ? false : true;
        },
    },
});

export const { yearChangeFlag } = yearsSlice.actions

export default yearsSlice.reducer;