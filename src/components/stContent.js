import styled, { css } from 'styled-components';

const ContentContainer = styled.div`
    position: absolute;
    width: 1440px;
    height: 1080px;
    display: flex;
    border: 1px solid red;
    background: transparent;
`;

const HistoricalTitle = styled.div`
    position: relative;
    width: 100%;
    height: 304px;
    display: flex;
    justify-content: space-between;
    z-index: 0;
`;

const TitleBorder = styled.div`
    display: flex;
    position: absolute;
    width: 5px;
    height: 134px;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%);
`;

const TitleContent = styled.div`
    display: flex;
    position: absolute;
    width: 353px;
    height: 134px;
    left: 400px;
    bottom: 0;
`;

export { ContentContainer, HistoricalTitle, TitleBorder, TitleContent }