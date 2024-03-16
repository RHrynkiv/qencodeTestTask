import styled from "styled-components";
import { inputColor, placeholderColor } from "../../../utils/helpersCSS";

export const Input = styled.input`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 14px 33px 14px 12px;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    color: ${placeholderColor};

    border: 1.2px solid ${inputColor};
    border-radius: 6px;

    &::placeholder {
        color: ${inputColor};
    }
`

export const InputWrapper = styled.div`
    position: relative;
`

export const PasswordIcon = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
`

export const ErrorWrapper = styled.div`
    height: 0px;
    & > div {
        color: red;
        font-size: 12px;
        margin-left: 5px;
    }
`