import styled from "styled-components";

import { backgroundSubmitButton, placeholderColor } from "../../utils/helpersCSS";

export const LoginWithButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const SignUpTextWrapper = styled.span`
    display: inline-block;
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: ${placeholderColor};

`
export const LinkText = styled(SignUpTextWrapper)<{$align?: "right" | "center" | "left", $display?: string, $margin?: string}>`
    display: ${({$display = "inline"}) => $display};
    width: 100%;
    margin: ${({$margin = "0"}) => $margin};
    text-align: ${({$align = "left"}) => $align};
    color: ${backgroundSubmitButton};
    font-weight: 500;
    cursor:pointer;
`
