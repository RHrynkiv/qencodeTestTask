import styled from "styled-components";
import { borderColor, dividerColor } from "../../../utils/helpersCSS";

export const DividerWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: 30px 0 30px 0;
`

export const DividerLine = styled.div`
    width: 100%;
    height: 0px;
    border: ${borderColor} solid 0.5px;
`

export const DividerText = styled.span`
    display: inline-block;
    margin: 0px 5px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: ${dividerColor};
`