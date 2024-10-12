const selectAllMaskDatas = state => state.mask.maskData;
const selectCurrentMaskBlock = state => state.mask.currentMaskBlock;
const selectMaskData = (state, number) => state.mask.maskData.find(data => data.number == number.toString());

export { selectAllMaskDatas, selectCurrentMaskBlock, selectMaskData };