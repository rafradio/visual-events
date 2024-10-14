import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllYearsDatas, selectCurrentYearBlock, selectYearsBlock, selectDiffYears } from '../store/selectorsYears';
import { selectCurrentMaskBlock } from '../store/selectors';
import { HistoricalTitle, TitleBorder, TitleContent, YearslWrap, YearslTitle, YearOfPeriod } from "./stContent";

function ContentInfo() {
    const dispatch = useDispatch();
    const currentBlockYear = useSelector(selectCurrentYearBlock);
    const currentMask = useSelector(selectCurrentMaskBlock);
    const currentYearsBlock = useSelector(state => selectYearsBlock(state, currentMask[0]));
    const diffYears = useSelector(selectDiffYears);

    const AnimationForYears = () => {
        const [value, setValue] = useState(1977);
        const [isActive, setIsActive] = useState(true);

        useEffect(() => {
            let intervalYear;
            if (value < 1988) {
                intervalYear = setInterval(() => {
                    setValue((prevValue) =>
                        prevValue + 1);
                }, 300);
            } else {

            }

            return () => {
                clearInterval(intervalYear);
            };
        });


        return(
            <>
                <YearOfPeriod $left><p id="firstYear">{ value }</p></YearOfPeriod>
                <YearOfPeriod $right><p id="lastYear">{ value }</p></YearOfPeriod>
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