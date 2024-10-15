import { useDispatch, useSelector } from 'react-redux';
import {  selectAllMaskDatas, selectCurrentMaskBlock, selectMaskData, selectMaskAngle, selectMaskCurrentAngles } from '../store/selectors';
import { Container, Mask, Ellipse337, CurrentEllips, TextCurrent, EllipseDesk } from './stComponents';
import { maskChangeElement, maskAddElement, maskRemoveElement } from '../features/MaskData/MaskSlice';
import { yearChangeFlag } from '../features/YearsData/YearsSlice';
import { selectYearsBlock } from '../store/selectorsYears';
import { yearChangeCurrent } from '../features/YearsData/YearsSlice';

function MaskWrap() {
    const dispatch = useDispatch();
    const MASKPROPS = ["first", "second", "third", "fourth", "fifth", "sixth"];
    const MASKANGLES = useSelector(selectMaskCurrentAngles);
    const datas = useSelector(selectAllMaskDatas);
    const currentMask = useSelector(selectCurrentMaskBlock);
    const currentAngle = useSelector(selectMaskAngle);
    const currentData = useSelector(state => selectMaskData(state, currentMask));


    const maskClick = (e, number) => {
        // e.stopPropagation();
        let difference = (135 - MASKANGLES[number]);
        dispatch(maskChangeElement(number, difference));
        dispatch(yearChangeFlag());
        dispatch(yearChangeCurrent(number));
    }

    const maskMouseEnter = (e, number) => {
        // e.stopPropagation()
        
        dispatch(maskAddElement(number));
    }

    const maskMouseLeave = (number) => {
        if (number != currentMask[0]) dispatch(maskRemoveElement(number));
    }

    const renderEllipses = datas.map((data, index) => {
        let cssRotateStyle = `rotate(${MASKANGLES[index]}deg) translateX(-268px) rotate(${-1*(MASKANGLES[index])}deg)`;
        
        return(
            !(currentMask.includes(index)) ? 
                <Ellipse337 key={index} $name = {MASKPROPS[index]} $angle={cssRotateStyle}>
                    <EllipseDesk onMouseEnter={(e)=>{maskMouseEnter(e, index)}}/>
                </Ellipse337> : 
                <CurrentEllips key={index} $name = {MASKPROPS[index]} $angle={cssRotateStyle}>
                    <EllipseDesk onMouseLeave={()=>{maskMouseLeave(index)}} onClick={(e)=>{maskClick(e, index)}}/>
                    <p>{ data.number }</p>
                    <TextCurrent>{ data.title }</TextCurrent>
                </CurrentEllips>
        )
    });

    return (
        <Container $mask>
            <Mask>
                {renderEllipses}
            </Mask>
        </Container>
    )
}

export default MaskWrap;