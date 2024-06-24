import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";


export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 27px;
    position: relative;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    margin: 0 5px;
    &:hover {
        opacity: 0.6;
        cursor: pointer;
        }
        
        ${({variant}) => variant !== "primary" && css<IButtonStyled>`
        font-size: 16px;
        min-width: 167px;
        height: 43px;
        max-width: 350px;
        background: #E4105D;
        margin-top: ${(props) => props.marginTop};
        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            max-width: 360px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 27px;
        }
    `}
`