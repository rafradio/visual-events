import { useDispatch, useSelector } from 'react-redux';
import { selectMaskDatas } from '../store/selectors';
import { Container, Mask, Ellipse337, CurrentEllips, TextCurrent } from './stComponents';

function MaskWrap() {
    const datas = useSelector(selectMaskDatas);

    return (
        <Container $mask>
            <Mask>
                <Ellipse337 $first></Ellipse337>
                <Ellipse337 $second></Ellipse337>
                <Ellipse337 $third></Ellipse337>
                <Ellipse337 $fourth></Ellipse337>
                <CurrentEllips $fifth>
                    <p>{ datas[0].number }</p>
                    <TextCurrent>{ datas[0].title }</TextCurrent>
                </CurrentEllips>
                <Ellipse337 $sixth></Ellipse337>
            </Mask>
        </Container>
    )
}

export default MaskWrap;