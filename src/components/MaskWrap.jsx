import { useDispatch, useSelector } from 'react-redux';
import {  selectAllMaskDatas, selectCurrentMaskBlock, selectMaskData } from '../store/selectors';
import { Container, Mask, Ellipse337, CurrentEllips, TextCurrent } from './stComponents';

function MaskWrap() {
    const datas = useSelector(selectAllMaskDatas);
    const currentMask = useSelector(selectCurrentMaskBlock);
    const currentData = useSelector(state => selectMaskData(state, currentMask));

    return (
        <Container $mask>
            <Mask>
                <Ellipse337 $first></Ellipse337>
                <Ellipse337 $second></Ellipse337>
                <Ellipse337 $third></Ellipse337>
                <Ellipse337 $fourth></Ellipse337>
                <CurrentEllips $fifth>
                    <p>{ currentData.number }</p>
                    <TextCurrent>{ currentData.title }</TextCurrent>
                </CurrentEllips>
                <Ellipse337 $sixth></Ellipse337>
            </Mask>
        </Container>
    )
}

export default MaskWrap;