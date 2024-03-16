import styled from "styled-components";
import { hoverButton, placeholderColor, inputColor, backgroundSubmitButton, whiteColor } from "../../../utils/helpersCSS";

export const Button = styled.button<{buttonType: "submit" | "button"}>`
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;

    padding: 13px 0;
    margin: ${({buttonType}) => buttonType === "submit" ? "30px 0 20px 0" : "0"};
    text-align: center;
    cursor: pointer;

    color: ${({buttonType}) => buttonType === "submit" ? whiteColor : placeholderColor};
    background: ${({buttonType}) => buttonType === "submit" ? backgroundSubmitButton : whiteColor};
    border: ${({buttonType}) => buttonType === "submit" ? "none" : `1.2px solid ${inputColor}`};
    border-radius: 8px;
    
    ${hoverButton}
`
