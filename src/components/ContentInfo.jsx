import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllYearsDatas, selectCurrentYearBlock, selectYearsBlock, selectDiffYears, 
    selectFlafChangingYears, selectCurrentYearData } from '../store/selectorsYears';
import { selectCurrentMaskBlock } from '../store/selectors';
import { HistoricalTitle, TitleBorder, TitleContent, YearslWrap, YearslTitle, YearOfPeriod } from "./stContent";
import { yearChangeFlag } from '../features/YearsData/YearsSlice';
import YearsCurrentInfo from './YearsCurrentInfo';

function ContentInfo() {
    const dispatch = useDispatch();
    const currentBlockYear = useSelector(selectCurrentYearBlock);
    const currentMask = useSelector(selectCurrentMaskBlock);
    const currentYearsBlock = useSelector(state => selectYearsBlock(state, currentMask[0]));
    const currentYearsBlock1 = useSelector(selectCurrentYearData);
    const diffYears = useSelector(selectDiffYears);
    const flagYearChanging = useSelector(selectFlafChangingYears);


    return (
        <>
            <HistoricalTitle>
                <TitleBorder></TitleBorder>
                <TitleContent>Исторические даты</TitleContent>
            </HistoricalTitle>
            <YearslWrap>
                <YearslTitle>
                    <YearsCurrentInfo />
                </YearslTitle>
            </YearslWrap>
        </>
    )

}

export default ContentInfo;