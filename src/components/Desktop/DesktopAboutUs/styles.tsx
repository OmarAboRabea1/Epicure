import styled from "styled-components"
import epicure_logo from "../../../assests/epicure_logo.svg"
import playStore from "../../../assests/playStore.svg"
import appleStore from "../../../assests/appleStore.svg"


export const AboutUsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: #FAFAFA;
    align-items: center;
    margin-top: 40px;
    padding-top: 20px;

`
export const Logo_box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const AboutUsimages = styled.div`
    width: 50%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;
    gap: 30px;


`

export const EpicureLogo_image = styled.div`
    width: 100%;
    height: 166px;
    background-image: url(${epicure_logo});
    background-position: center;
    background-repeat: no-repeat;

`

export const Stores_box = styled.div`
    width: 100%;
    height: fit-content;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
`


export const PlayStore_image = styled.div`
    width: 100%;
    height: 70px;
    background-image: url(${playStore});
    background-repeat: no-repeat;

`

export const AppleStore_image = styled.div`
    width: 100%;
    height: 70px;
    background-image: url(${appleStore});
    background-repeat: no-repeat;


`


export const AboutUsDesc = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;  
    flex-direction: column;
`