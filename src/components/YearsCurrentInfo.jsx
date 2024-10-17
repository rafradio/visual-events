import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllYearsDatas, selectCurrentYearBlock, selectYearsBlock, selectDiffYears, 
    selectFlafChangingYears, selectCurrentYearData } from '../store/selectorsYears';
import { selectCurrentMaskBlock } from '../store/selectors';
import { HistoricalTitle, TitleBorder, TitleContent, YearslWrap, YearslTitle, YearOfPeriod } from "./stContent";

function YearsCurrentInfo() {
    const dispatch = useDispatch();
    const currentYearsBlock1 = useSelector(selectCurrentYearData);

    return(
        <>
            <YearOfPeriod $left><p>{ currentYearsBlock1[0] }</p></YearOfPeriod>
            <YearOfPeriod $right><p>{ currentYearsBlock1[1] }</p></YearOfPeriod>
        </>
    )
}

export default YearsCurrentInfo;