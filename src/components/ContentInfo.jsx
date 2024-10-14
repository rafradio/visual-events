import { useDispatch, useSelector } from 'react-redux';
import { selectAllYearsDatas, selectCurrentYearBlock, selectYearsBlock } from '../store/selectorsYears';
import { HistoricalTitle, TitleBorder, TitleContent, YearslWrap, YearslTitle, YearOfPeriod } from "./stContent";

function ContentInfo() {
    const dispatch = useDispatch();
    const currentBlockYear = useSelector(selectCurrentYearBlock);
    const currentYearsBlock = useSelector(state => selectYearsBlock(state, currentBlockYear));

    return (
        <>
            <HistoricalTitle>
                <TitleBorder></TitleBorder>
                <TitleContent>Исторические даты</TitleContent>
            </HistoricalTitle>
            <YearslWrap>
                <YearslTitle>
                    <YearOfPeriod><p>{ currentYearsBlock[0] }</p></YearOfPeriod>
                    <YearOfPeriod><p>{ currentYearsBlock[1] }</p></YearOfPeriod>
                </YearslTitle>
            </YearslWrap>
        </>
    )
}

export default ContentInfo;