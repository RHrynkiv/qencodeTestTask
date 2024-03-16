import styled from "styled-components";
import { hoverButton, inputColor, placeholderColor } from "../../../utils/helpersCSS";

export const ButtonWrapper = styled.button`
    background: none;
    border: 1.2px solid ${inputColor};
    border-radius: 6px;
    padding: 15px 59px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    ${hoverButton}

    @media (max-width: 400px) {
        padding: 15px 40px;
    }
    @media (max-width: 300px) {
        padding: 10px 25px;
    }
`

export const ButtonIcon = styled.div`
    width: 18px;
    height: 18px;
`
export const ButtonText = styled.span`
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: ${placeholderColor};
`