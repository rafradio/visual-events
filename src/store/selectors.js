const selectAllMaskDatas = state => state.mask.maskData;
const selectCurrentMaskBlock = state => state.mask.currentMaskBlock;
const selectMaskData = (state, number) => state.mask.maskData.find(data => data.number == number.toString());
const selectMaskAngle = state => state.mask.angle;

export { selectAllMaskDatas, selectCurrentMaskBlock, selectMaskData, selectMaskAngle };