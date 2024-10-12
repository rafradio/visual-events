import { Container, Mask, Ellipse337, CurrentEllips } from './stComponents';

function MaskWrap() {
    let myProps = "$first";
    return (
        <Container $mask>
            <Mask>
                <Ellipse337 $first></Ellipse337>
                <Ellipse337 $second></Ellipse337>
                <Ellipse337 $third></Ellipse337>
                <Ellipse337 $fourth></Ellipse337>
                <CurrentEllips $fifth>
                    <p>6</p>
                </CurrentEllips>
                <Ellipse337 $sixth></Ellipse337>
            </Mask>
        </Container>
    )
}

export default MaskWrap;