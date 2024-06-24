import styled from "styled-components";
import { ISubTitleLogin } from "./types";


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 32px;
    font-weight: 700;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const Column = styled.div`
    flex: 1;
`

export const Wrapper = styled.div`
    max-width: 368px;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
`

export const SubTitleLogin = styled.p<ISubTitleLogin>`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    line-height: 25px;
`

export const TenhoContaText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;

    color: #FFFFFF;
    a {
        text-decoration: none;
        color: #23DD7A;
    }
`