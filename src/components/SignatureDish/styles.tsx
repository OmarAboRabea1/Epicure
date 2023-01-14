import styled from "styled-components"
import claro_Res from "../../assests/Claro_Res.svg"
import spicy from "../../assests/spicy.svg"
import vegan from "../../assests/vegan.svg"
import vegetarian from "../../assests/vegetarian.svg"
import meat from "../../assests/meat3.jpeg"
import shekel_sign from "../../assests/shekel_sign.svg"


export const SignatureDish_Container = styled.div`
    width: 100%;
    align-items: flex-start;
    display: flex !important;
    flex-direction: column;
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

`

export const Swiper_container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    overflow-x: scroll;
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

export const DishCard_signature = styled.div.attrs((props: {sigType: string}) => props)`
    ${props => props.sigType === "Spicy" && `
        height: 100px;
        width: 70px;
        background-image: url(${spicy});
        background-position: flex-end;
        background-repeat: no-repeat;

    `}  
    ${props => props.sigType === "Vegan" && `
        height: 100px;
        width: 70px;
        background-image: url(${vegan});
        background-position: flex-end;;
        background-repeat: no-repeat;
    `}
        ${props => props.sigType === "Vegetarian" && `
        height: 100px;
        width: 70px;
        background-image: url(${vegetarian});
        background-position: flex-end;;
        background-repeat: no-repeat;

    `}
        ${props => props.sigType === "Meat" && `
        height: 100px;
        width: 70px;
        background-image: url(${meat});
        background-position: flex-end;;
        background-size: contain;
        background-repeat: no-repeat;

    `}


`


export const DishCard_price_box = styled.div`
    height: fit-content;
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    left: 0px;

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
