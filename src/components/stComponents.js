import styled, { css } from 'styled-components';

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
    flex-direction: ${(props) => (props.$mask && '' || 'row')};
    justify-content: ${(props) => (props.$mask && 'center' || '')};
`;

const Vector = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    height: 100%;
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

    ${props => props.$first && css`
        transform: translateX(268px);
    `}

    ${props => props.$second && css`
        transform: translateX(-268px);
    `}

    ${props => props.$third && css`
        transform: rotate(45deg) translateX(268px) rotate(-45deg);
    `}

    ${props => props.$fourth && css`
        transform: rotate(45deg) translateX(-268px) rotate(-45deg);
    `}

    ${props => props.$fifth && css`
        transform: rotate(-45deg) translateX(268px) rotate(45deg);
    `}

    ${props => props.$sixth && css`
        transform: rotate(-45deg) translateX(-268px) rotate(45deg);
    `}
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

export { Frame, Container, Vector, Vector18, Mask, Ellipse337, CurrentEllips };