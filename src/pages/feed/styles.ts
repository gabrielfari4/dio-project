import styled from "styled-components";
import { IColumn } from "./types";


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF;
`
export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF70;
`

export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`