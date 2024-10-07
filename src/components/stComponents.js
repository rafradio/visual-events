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
    height: 30%;
    width: 100%;
    border-bottom: 1px solid #42567A;
`;

const Mask = styled.div`
    border: 1px solid #42567A;
    display: flex;
    position: relative;
    width: 536px;
    height: 530px;
    border-radius: 50%;
`;

export { Frame, Container, Vector, Vector18, Mask };