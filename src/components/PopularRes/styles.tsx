import styled from "styled-components"
import claro_Res from "../../assests/Claro_Res.svg"
import arrows from "../../assests/arrows.svg"


export const PopualrRes_Container = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;
    display: flex !important;
    flex-direction: column;

`
export const Title = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;

`
export const RestaurantCard = styled.div`
    width: 245px;
    height: fit-content;
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

export const RestaurantCard_img2 = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${claro_Res}) ;
    background-repeat: no-repeat;


`
export const RestaurantCard_img = styled.img`
    height: 100%;
    width: 100%;    
    
`
export const slider_thumbs = styled.div`

    
    swiper-slide {
        position: absolute;
        cursor: pointer;
        border: 1px solid #fa0707;

        &-thumb-active {
            border-color: #ff02f2;
        }
    }

    
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

export const Card_container2 = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
`

export const AllRes_box = styled.div`
    width: 100%;
    height: fit-content;
    padding-top: 18.2px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
`

export const AllRes_click = styled.a`
    padding-left: 20px;

`
export const AllRes_click_arrows = styled.a`
    width: 40px;
    height: 40px;
    background-image: url(${arrows});
    background-repeat: no-repeat;
`