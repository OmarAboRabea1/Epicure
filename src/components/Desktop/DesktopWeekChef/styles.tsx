import styled from "styled-components"
import yossi from "../../../assests/yossi.svg"
import onza_Res from "../../../assests/onza.svg"

export const WeekChefContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
export const Box_for_chef_details = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-left: 40px;

`
export const Title_for_chef = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
`

export const ChefImage_box = styled.div`
    width: 40%;
    height: 300px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Chef_image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${yossi});
    background-repeat: no-repeat;
    background-position: center;

`

export const ChefName_box = styled.div`
    width: 33%;
    height: 6.5%;
    text-align: center;
    position: absolute;
    bottom: -89.8rem;
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

export const Title_for_chef_res = styled.div`
    width: fit-content;
    height: fit-content;
    margin-left: 70px;
`

export const ChefDesc_box = styled.div`
    width: 40%;
    height: fit-content;
    margin-top: 30px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const Container_for_cards = styled.div`
    width: 90%;
    display: flex;
    padding-left: 80px;
    flex-direction: row;

`
export const RestaurantCard = styled.div`
    width: 170px;
    height: 232.8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #F9F4EA;

`
export const RestaurantCard_desc = styled.div`
    height: 40%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 16px;

`
export const ResName = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    color: #000000;

`
export const ResChef = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
`

export const RestaurantCard_img = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${onza_Res}) ;
    background-position: center;
    background-repeat: no-repeat;


`
export const Card_container2 = styled.div`
    width: fit-content;
    height: fit-content;
    padding-left: 5px;
    padding-right: 5px;
`