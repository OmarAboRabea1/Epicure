import styled from "styled-components"
import epicure_logo from "../../assests/epicure_logo.svg"
import playStore from "../../assests/playStore.svg"
import appleStore from "../../assests/appleStore.svg"


export const AboutUsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
    align-items: flex-end;
    margin-top: 40px;
    padding-top: 20px;

`
export const AboutUsimages = styled.div`
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;


`

export const EpicureLogo_image = styled.div`
    width: 100%;
    height: 150px;
    background-image: url(${epicure_logo});
    background-repeat: no-repeat;

`

export const Stores_box = styled.div`
    width: 100%;
    height: 320px;
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
    width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
`