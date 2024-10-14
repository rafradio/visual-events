import styled, { css } from 'styled-components';

const handleMaskAngle = angle => {
    console.log(angle);
    return css`transform: rotate(135deg) translateX(-268px) rotate(-135deg);`
    // return "color: #03a9f3; background: #000;";
}
const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    position: ${(props) => (props.$mask && 'absolute' || 'relative')};
    width: 1440px;
    height: 1080px;
    display: flex;
    align-items: ${(props) => (props.$mask && 'center' || 'flex-start')};
    flex-direction: ${(props) => (props.$mask && '' || 'column')};
    justify-content: ${(props) => (props.$mask && 'center' || '')};
    z-index: ${(props) => (props.$mask && '5' || '0')};
`;
const Vector = styled.div`
    display: flex;
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: ${(props) => (props.$left && '0' || '')};
    right: ${(props) => (props.$left && '' || '0')};
    border-left: ${(props) => (props.$left && '1px solid #42567A' || '')};
    border-right: ${(props) => (props.$left && '1px solid #42567A' || '1px solid #42567A')};
`;
const Vector18 = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 44%;
    width: 100%;
    border-bottom: 1px solid #42567A;
`;
const Mask = styled.div`
    border: 1px solid #42567A;
    display: flex;
    position: relative;
    width: 536px;
    height: 536px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transform: translateY(-12%);
`;
const Ellipse337 = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 6px;
    height: 6px;
    background: #42567A;
    border-radius: 50%;
    cursor: pointer;
    transform:  ${(props) => props.$angle};
    transition: transform 0.5s;
`;
const EllipseDesk = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
`;
const CurrentEllips = styled(Ellipse337)`
    width: 56px;
    height: 56px;
    border: 1px solid #303E5880;
    background: #ffffff;
    font-family: PT Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #42567A;
`;
const TextCurrent = styled.div`
    width: 53px;
    height: 30px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-start;
    font-family: PT Sans;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    transform: translateX(70px);
`;

export { Frame, Container, Vector, Vector18, Mask, Ellipse337, CurrentEllips, TextCurrent, EllipseDesk };