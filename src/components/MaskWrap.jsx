import { useDispatch, useSelector } from 'react-redux';
import {  selectAllMaskDatas, selectCurrentMaskBlock, selectMaskData } from '../store/selectors';
import { Container, Mask, Ellipse337, CurrentEllips, TextCurrent } from './stComponents';
import { maskChangeElement } from '../features/MaskData/maskSlice';

function MaskWrap() {
    const dispatch = useDispatch();
    const MASKPROPS = ["first", "second", "third", "fourth", "fifth", "sixth"];
    const datas = useSelector(selectAllMaskDatas);
    const currentMask = useSelector(selectCurrentMaskBlock);
    const currentData = useSelector(state => selectMaskData(state, currentMask));

    const maskClick = (number) => {
        dispatch(maskChangeElement(number));
    }

    const renderEllipses = datas.map((data, index) => {
        return(
            index != currentMask ? 
                <Ellipse337 key={index} $name = {MASKPROPS[index]} onClick={()=>{maskClick(index)}}></Ellipse337> : 
                <CurrentEllips key={index} $name = {MASKPROPS[index]}>
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