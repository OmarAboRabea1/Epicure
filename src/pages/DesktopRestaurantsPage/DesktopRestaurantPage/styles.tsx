import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px ;
    background-color: #f1eeee;

`
export const DesktopContainer = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Filter_text = styled.button.attrs((props: {underline: boolean}) => props)`
    ${props => props.underline === false && `
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 14px;
        line-height: 15px;
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
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 1.3px;
        color: #000000;
        border: none;
        background: none;
    `}
`

export const Filter_bar = styled.div`
    width: 89%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 5px;
    padding-left: 5px;


`

export const Filter_box = styled.div.attrs((props: {underline: boolean}) => props)`
    ${props => props.underline === false && `
        width: fit-content;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f1eeee;
        
    `}
    ${props => props.underline === true && `
        width: fit-content;
        height: 100%;
        display: flex;
        font-weight: bold;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #D0CFCF;
    `}
`
export const Box_for_arrow = styled.div`
    width: fit-content;
    height: fit-content;
`
export const Box_for_text = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Arrow = styled.div`
    border-top: 10px solid Black;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    opacity: 0.15;
    width: 0;
    height: 0;

`