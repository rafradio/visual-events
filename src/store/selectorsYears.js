const selectAllYearsDatas = state => state.years.yearsData;
const selectCurrentYearBlock = state => state.years.currentYearBlock;
const selectYearsBlock = (state, number) => state.years.yearsData[number];

export { selectAllYearsDatas, selectCurrentYearBlock, selectYearsBlock };