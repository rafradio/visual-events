const selectAllYearsDatas = state => state.years.yearsData;
const selectCurrentYearBlock = state => state.years.currentYearBlock;
const selectYearsBlock = (state, number) => state.years.yearsData[number];
const selectDiffYears = state => state.years.diffYears;
const selectFlafChangingYears = state => state.years.flagChangingYears;

export { selectAllYearsDatas, selectCurrentYearBlock, selectYearsBlock, selectDiffYears, selectFlafChangingYears };