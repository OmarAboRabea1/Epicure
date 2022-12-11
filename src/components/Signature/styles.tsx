import styled from "styled-components"
import spicy from "../../assests/spicy.svg"
import vegetarian from "../../assests/vegetarian.svg"
import vegan from "../../assests/vegan.svg"


export const Signature_Container = styled.div`
    width: 100%;
    height: 584px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #FAFAFA;

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

export const Signature_images = styled.div`
    width: 33%;
    height: 80%;
    gap: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Spicy_box = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Spicy_image = styled.div`
    width: 100%;
    height: 80%;
    background-image: url(${spicy});
    background-repeat: no-repeat;
    background-position: center;
`

export const Spicy_text = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;

`

export const Vegitarian_box = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Vegitarian_image = styled.div`
    width: 100%;
    height: 80%;
    background-image: url(${vegetarian});
    background-repeat: no-repeat;
    background-position: center;

`

export const Vegitarian_text = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;

`


export const Vegan_box = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Vegan_image = styled.div`
    width: 100%;
    height: 90%;
    background-image: url(${vegan});
    background-repeat: no-repeat;
    background-position: center;

`

export const Vegan_text = styled.h1`

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1.97px;
    color: #000000;

`


