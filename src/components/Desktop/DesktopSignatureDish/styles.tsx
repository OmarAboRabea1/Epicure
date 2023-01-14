import styled from "styled-components"
import claro_Res from "../../../assests/Claro_Res.svg"
import spicy from "../../../assests/spicy.svg"
import shekel_sign from "../../../assests/shekel_sign.svg"


export const SignatureDish_Container = styled.div`
    width: 100%;
    align-items: flex-start;
    display: flex !important;
    flex-direction: column;
    align-items: center;
`
export const Container2 = styled.div`
    width: 100%;
    height: 100%;
    
`
export const Title = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
    margin-left: 20px;
`
export const Card_container = styled.div`
    width: fit-content;
    height: fit-content;
    padding-left: 20px;
    padding-right: 20px;
`

export const Dishes_container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

`


export const DishesCard = styled.div`
    width: 245px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #F9F4EA;

`
export const DishCard_desc = styled.div`
    height: 60%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 16px;

`
export const DishName = styled.h1`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 2.67px;
    color: #000000;

`

export const DishIngredients_box = styled.div`
    height: 60%;
    width: 100%;

`

export const DishIngredients = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.97px;
    color: #000000;
`

export const DishCard_img = styled.img`
    height: 40%;
    width: 100%;


`

export const DishCard_signature = styled.div`
    height: 25%;
    width: 100%;
    background-image: url(${spicy}) ;
    background-repeat: no-repeat;


`


export const DishCard_price_box = styled.div`
    height: 15%;
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

`
export const DishPrice = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;
`


export const Shekel_sign = styled.div`
    height: 15px;
    width: 15%;
    background-image: url(${shekel_sign}) ;
    background-repeat: no-repeat;


`
