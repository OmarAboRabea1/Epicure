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