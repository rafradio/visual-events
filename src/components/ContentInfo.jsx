import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllYearsDatas, selectCurrentYearBlock, selectYearsBlock, selectDiffYears, 
    selectFlafChangingYears, selectCurrentYearData } from '../store/selectorsYears';
import { selectCurrentMaskBlock } from '../store/selectors';
import { HistoricalTitle, TitleBorder, TitleContent, YearslWrap, YearslTitle, YearOfPeriod } from "./stContent";
import { yearChangeFlag } from '../features/YearsData/YearsSlice';

function ContentInfo() {
    const dispatch = useDispatch();
    const currentBlockYear = useSelector(selectCurrentYearBlock);
    const currentMask = useSelector(selectCurrentMaskBlock);
    const currentYearsBlock = useSelector(state => selectYearsBlock(state, currentMask[0]));
    const currentYearsBlock1 = useSelector(selectCurrentYearData);
    const diffYears = useSelector(selectDiffYears);
    const flagYearChanging = useSelector(selectFlafChangingYears);

    const AnimationForYears = () => {
        const [value, setValue] = useState(1977);
        const [isActive, setIsActive] = useState(true);

        // useEffect(() => {
        //     let intervalYear;
        //     if ((value < 1988) && flagYearChanging) {
        //         intervalYear = setInterval(() => {
        //             setValue((prevValue) =>
        //                 prevValue + 1);
        //         }, 300);
        //     } else {
        //         if (value >= 1988) dispatch(yearChangeFlag);
        //     }

        //     return () => {
        //         clearInterval(intervalYear);
        //     };
        // });


        return(
            <>
                <YearOfPeriod $left><p id="firstYear">{ currentYearsBlock1[0] }</p></YearOfPeriod>
                <YearOfPeriod $right><p id="lastYear">{ currentYearsBlock1[1] }</p></YearOfPeriod>
            </>
        )
    }

    return (
        <>
            <HistoricalTitle>
                <TitleBorder></TitleBorder>
                <TitleContent>Исторические даты</TitleContent>
            </HistoricalTitle>
            <YearslWrap>
                <YearslTitle>
                    <AnimationForYears />
                </YearslTitle>
            </YearslWrap>
        </>
    )

    // return (
    //     <>
    //         <HistoricalTitle>
    //             <TitleBorder></TitleBorder>
    //             <TitleContent>Исторические даты</TitleContent>
    //         </HistoricalTitle>
    //         <YearslWrap>
    //             <YearslTitle>
    //                 <YearOfPeriod $left><p>{ currentYearsBlock[0] }</p></YearOfPeriod>
    //                 <YearOfPeriod $right><p>{ currentYearsBlock[1] }</p></YearOfPeriod>
    //             </YearslTitle>
    //         </YearslWrap>
    //     </>
    // )
}

export default ContentInfo;