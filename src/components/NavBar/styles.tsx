import React ,{ useEffect, useState } from "react";
import styled from "styled-components"
import logo from "../../assests/restaurant logo.png";
import search_icon_img from "../../assests/searchIcon.png";
import user_icon_img from "../../assests/userIcon.png";
import cart_icon_img from "../../assests/cartIcon.png";
import theX from "../../assests/theX.svg";
import cart_img from "../../assests/cart_img.svg";
import search_img from "../../assests/search_img.svg";
import or_line from "../../assests/or_line.svg";


import { isPropertySignature } from "typescript";


export const Nav_Container = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);

`

export const StyledNavBar = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 10px;

`
export const Left_nav = styled.div.attrs((props: {active: boolean}) => props)

`
   
    display: flex;
    width: fit-content;
    height: fit-content;


`

export const Right_nav_visible = styled.div.attrs((props: {active: boolean}) => props)`

    ${props => props.active === false && `
        display: none
    `}
    ${props => props.active === true && `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px;
        gap: 15px;
    `}

`

export const Center_nav_visible = styled.div.attrs((props: {active: boolean}) => props)`

     ${props => props.active === false && `
        display: none;
    `}
    ${props => props.active === true && `
        display: flex;
        padding-left: 50px;
    `}


`



export const Right_nav_hidden = styled.div`
    display: none;
`


export const Hamburger = styled.div.attrs((props: {active: boolean}) => props)`

    ${props => props.active === false && `
            display: none
        `}
        ${props => props.active === true && `
            height: 8px;
            width: 8px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            cursor: pointer;
            padding: 4px;
        `}
   
`

export const TheX = styled.div.attrs((props: {active: boolean}) => props)`

     ${props => props.active === false && `
        display: none
    `}
    ${props => props.active === true && `
        background-image: url(${theX});
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
    `}


`


const search_icon = styled.div`
    width: 20px;
    height: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

const user_icon = styled.div`
    width: 20px;
    height: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
`

const cart_icon = styled.div`
    width: 20px;
    height: 20px;
    flex: none;
    order: 2;
    flex-grow: 0;

`


export const Logo_img = styled.div`
    background-image: url(${logo});
    width: 32.93px;
    height: 32px;
`
    
export const SearchIcon = styled.div`
    background-image: url(${search_icon_img});
    width: 20px;
    height: 20px;
`
export const UserIcon = styled.div`
    background-image: url(${user_icon_img});
    width: 20px;
    height: 20px;
`
export const CartIcon = styled.div`
    background-image: url(${cart_icon_img});
    width: 20px;
    height: 20px;
`


const center_nav_hidden  = styled.div`
    display: none;
`




export const Burger_bar  = styled.div`
    width: 16px;
    height: 0px;
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.9);
`


const menu  = styled.div`
    display: none;
`

export const Menu_active  = styled.div.attrs((props: {active: boolean}) => props)`
    display: ${props=> props.active ? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 0px 24px 0px;
    gap: 24px;
    position: absolute;
    width: 100%;
    height: 340px;
    top: 46px;
    background: #ffffff;
    box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`

export const Line  = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 0px;
    left: -1px;
    top: 148px;
    border: 1px solid #F2F2F2;
`

export const Contact_box  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 32px;
    gap: 40px;
    position: absolute;
    width: 126px;
    height: 146px;
    left: 18px;
    top: 148px; 
`

export const Res_box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    padding: 24px;
`


export const search = styled.div`
    display: none;
`

export const Search_active = styled.div.attrs((props: {active: boolean}) => props)`

${props => props.active === false && `
        display: none
    `}
    ${props => props.active === true && `
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        gap: 24px;
        position: absolute;
        width: 100%;
        height: 294px;
        top: 46px;
        background: #ffffff;
        box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
    `}
    
`

export const Search_text = styled.div.attrs((props: {active: boolean}) => props)`

    ${props => props.active === false && `
        display: none
    `}
    ${props => props.active === true && `
        display: flex;
        width: 100%;
        hegiht: fit-content;
        align-items: center;
        justify-content: center;

    `}

`
export const Box_for_serch = styled.div`
    display: flex;
    align-items: center;


`
export const Search_box = styled.div`
    display: flex;
    align-items: center;
    padding: 1px;
    gap: 5px;
    width: 84.3%;
    height: 10.21%;
    background: #ffffff;

`

export const Search_input = styled.input`
    width: 90%;
    height: 83%;   
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.29px;
    border-radius: none;
    color: #000000;
`
export const On_search_img = styled.div`

    background-image: url(${search_img});
    background-repeat: no-repeat;
    width: 6.3%;
    height: 68%;
`

export const Search_text_h1 = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 1.92px;
    color: #000000;
`
export const Link_to = styled.a`
    
    text-decoration: none;
`



const user = styled.div`
    display: none;
`

export const User_active = styled.div.attrs((props: {active: boolean}) => props)`

    ${props => props.active === false && `
            display: none
        `}
    ${props => props.active === true && `
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 40px;
        padding-bottom: 40px;
        gap: 24px;
        position: absolute;
        width: 100%;
        height: 590px;
        top: 46px;
        background: #ffffff;
        box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
    `}

`
    export const User_text = styled.h1`
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        letter-spacing: 2.67px;
        text-transform: uppercase;
        color: #000000;
        `
    export const User_text2 = styled.h1`
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1.97px;
        color: #000000;

    `
    export const Sign_in_box = styled.div`
        width: 100%;
        height: 105%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 40px;
        background: #ffffff;

    `
    export const Sign_in_box1 = styled.div`
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        background: #ffffff;

    `
    export const Email_box = styled.div`
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
        background: #ffffff;    
        `

    export const InputMail_text = styled.h1`
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1.97px;
        color: #000000;
        opacity: 0.4;
    `
    export const Mail_input = styled.input`
        width: 90%;
        height: 100%;   
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1.97px;
        color: #000000;
`

    export const Password_box = styled.div`
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
        background: #ffffff;    
    `

    export const InputPass_text = styled.h1`
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1.97px;
        color: #000000;
        opacity: 0.4;
    `
    export const Pass_input = styled.input`
        width: 90%;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1.97px;
        color: #000000;

`
    export const Log_in_box = styled.div`
        width: 55%;
        height: 14%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        background: #ffffff;

    `
    export const Log_in_button = styled.button`
        width: 100%;
        height: 50%;
        text-align: center;
        align-items: center;
        padding: 0px;
        background: #000000;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 2.67px;
        text-transform: uppercase;
        color: #FFFFFF;
        
`
    export const Login_text = styled.h1`
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 1.97px;
        color: #000000;
`
    export const Or_line = styled.div`

        background-image: url(${or_line});
        width: 78.1%;
        height: 3.1%;
`
    export const Sign_up_box = styled.button`
        text-align: center;
        width: 55%;
        height: 8.2%;
        align-items: center;
        padding: 0px;
        background: #ffffff;
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 2.67px;
        text-transform: uppercase;
        color: #000000;

    `


const cart = styled.div`
    display: none;
`

export const Cart_active = styled.div.attrs((props: {active: boolean}) => props)`
    ${props => props.active === false && `
        display: none
    `}
    ${props => props.active === true && `
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 185px;
        top: 35px;
        background: #ffffff;
        box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
    `}

`

export const On_cart = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    gap: 10px;
    width: 47%;
    height: 80%;
    background: #ffffff;

    h1{
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 1.97px;
        text-transform: uppercase;

        color: #000000;

    }

`
export const Box_for_img = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 35%;
    height: 40%;
`
export const On_cart_img = styled.div`

    background-image: url(${cart_img});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
`

export const Search_text_box = styled.div`
    width: 315px;
    height: 64px;

`




export const Search_result_table = styled.div`
    width: 80%;
    height: fit-content;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;


`

export const Search_result_text = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

`
export const nothing = styled.div`
    display: none;
`


export const Search_text_p = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

`

export const Search_containerSec = styled.div`
    width: 100%;
    height: 100%;


`


export const Search_result_newContainer = styled.div`
    width: 90%;
    height: 150px;
    position: absolute;
    top: 59px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    background: rgba(255, 255, 255, 0.95);


`