import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title_box = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
`

export const Title = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
    color: #000000;
`

export const Filter_bar = styled.div`
    margin-top: 50px;
    width: 40%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 5px;
    padding-left: 5px;

`

export const Filter_box = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

`
export const Filter_text = styled.button.attrs((props: {underline: boolean}) => props)`
    ${props => props.underline === false && `
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 5px;
        letter-spacing: 1.3px;
        color: #000000;
        text-decoration: none;
        border: none;
        background: none;
    `}
    ${props => props.underline === true && `
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 5px;
        letter-spacing: 1.3px;
        color: #000000;
        border: none;
        background: none;
        border-bottom: 3px solid red;
        padding-bottom: 7px;
    `}
`

export const UnderlinedSpan = styled.span`

  text-decoration: underline;

`



