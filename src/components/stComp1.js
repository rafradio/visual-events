import styled, { css } from 'styled-components';

// const handleMaskType = typeMask => {
//     switch (typeMask) {
//         case "first":
//             return "transform: translateX(268px);";
//         case "second":
//             return "transform: translateX(-268px);";
//         case "third":
//             return "transform: rotate(45deg) translateX(-268px) rotate(-45deg);";
//         case "fourth":
//             return "transform: rotate(-45deg) translateX(268px) rotate(45deg);";
//         case "fifth":
//             return "transform: rotate(-45deg) translateX(268px) rotate(45deg);";
//         case "sixth":
//             return "transform: rotate(-45deg) translateX(-268px) rotate(45deg);";
//     }
//   };

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

    ${(props) => {
        switch (props.$name) {
            case "first":
                return css`
                transform: translateX(268px);
                `;
            case "second":
                return css`
                transform: translateX(268px);
                `;
            case "third":
                return css`
                transform: translateX(268px);
                `;
            case "fourth":
                return css`
                transform: translateX(268px);
                `;
            case "fifth":
                return css`
                transform: translateX(268px);
                `;
            case "sixth":
                return css`
                transform: translateX(268px);
                `;
   
        }
    }}

     ${(props) => {
        switch (props.$name) {
            case "first": css`transform: ${({ angle }) => handleMaskAngle(angle)};`
                
                
            case "second":
                return css`
                transform: rotate(180deg) translateX(-268px) rotate(-180deg);
                `;
            case "third":
                return css`
                transform: rotate(225deg) translateX(-268px) rotate(-225deg);
                `;
            case "fourth":
                return css`
                transform: rotate(315deg) translateX(-268px) rotate(-315deg);
                `;
            case "fifth":
                return css`
                transform: rotate(0deg) translateX(-268px) rotate(-0deg);
                `;
            case "sixth":
                return css`
                transform: rotate(45deg) translateX(-268px) rotate(-45deg);
                `;
   
        }
    }}

    ${props => props.$name == "first" ? css`
        transform: translateX(268px);
    ` : ''}

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