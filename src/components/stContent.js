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
    justify-content: flex-start;
    width: 353px;
    height: 134px;
    left: 80px;
    bottom: 0;
    font-family: PT Sans;
    font-size: 56px;
    font-weight: 700;
    line-height: 67.2px;
    text-align: left;
    color: #42567A;
`;
const YearslWrap = styled.div`
    position: relative;
    width: 100%;
    height: 393px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
`;
const YearslTitle = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 973px;
    height: 160px;
    font-family: PT Sans;
    font-size: 200px;
    font-weight: 700;
    line-height: 160px;
    letter-spacing: -0.02em;
    text-align: center;
`;
const YearOfPeriod = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 100%;
    color: ${(props) => (props.$left && '#3877EE' || '#de4c4c')};
`;

export { ContentContainer, HistoricalTitle, TitleBorder, TitleContent, YearslWrap, YearslTitle, YearOfPeriod }