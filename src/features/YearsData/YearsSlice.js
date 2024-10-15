import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { YearsRowData } from './Data/YearsRowData';

const initialState = {
    yearsData: YearsRowData,
    yearsCurrentData: YearsRowData[0],
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
        yearChangeCurrent: (state, action) => {
            state.yearsCurrentData = state.yearsData[action.payload];
        },
        animateYearChange: (state, action) => {
            state.yearsCurrentData = action.payload;
        },
    },
});

export const { yearChangeFlag, yearChangeCurrent, animateYearChange } = yearsSlice.actions

export default yearsSlice.reducer;