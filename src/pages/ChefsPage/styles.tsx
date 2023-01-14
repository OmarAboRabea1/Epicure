import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DesktopContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 150px;
`
export const Cards_container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
`
export const Cards_container2 = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    flex-direction: row;
    justify-content: flex-start;
    gap: 15px;
`
export const Title_box = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
`

export const Title = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
    color: #000000;
`
export const Secondary_title = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`



export const UnderlinedSpan = styled.span`

  text-decoration: underline;

`
 export const ResLink = styled.a`
    text-decoration: none;
 `

export const ResImg = styled.img` 
    width: 80%;
    height: 450px;
    background-position: center;
`
export const ClockImg = styled.img` 
    width: fit-content;
    height: fit-content;
    background-position: center;
`

export const ResImg_box = styled.div` 
    width: 100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Res_container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`


export const Description = styled.div`

    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 40px;

`
export const Box = styled.div`

    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`
export const Empty_Box = styled.div`

    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    text-align: center;
`
export const Empty_text = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1.92px;
    text-transform: uppercase;
    color: #000000;
`
export const ChefImage_box = styled.a`
    width: 100%;
    height: 300px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
`

export const Chef_image = styled.img`
    width: 75%;
    height: 100%;

`

export const ChefName_box = styled.div`
    width: 75%;
    height: fit-content;
    text-align: center;
    position: absolute;
    bottom: 0px;
    background: rgba(255, 255, 255, 0.8);
`
export const ChefName_text_box = styled.div`
    width: fit-content;
    height: fit-content;
    justify-content: center;
    align-items: center;
`

export const ChefName_text = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    letter-spacing: 2.67px;
    color: #000000;

`
export const WeekChefContainer = styled.div`
    width: 40%;
    height: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

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