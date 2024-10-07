import styled, { css } from 'styled-components';

const Frame = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    position: relative;
    width: 1440px;
    height: 1080px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
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

export { Frame, Container, Vector, Vector18 };