import styled from "styled-components";
import { placeholderColor } from "../../utils/helpersCSS";

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const Label = styled.span`
    display: inline-block;
    width: 100%;
    margin-bottom: 8px;

    color: ${placeholderColor};
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
`