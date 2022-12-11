
import {Title} from "../PopularRes/styles";
import { AboutUsContainer, AboutUsDesc, AboutUsimages, AppleStore_image, EpicureLogo_image, PlayStore_image, Stores_box } from "./styles";



export const AboutUs = ()=>{
    return(
        <AboutUsContainer>
            <AboutUsimages>
                <Stores_box>
                    <EpicureLogo_image/>
                    <PlayStore_image/>
                    <AppleStore_image/>
                </Stores_box>
            </AboutUsimages>
            <AboutUsDesc>
                <Title>ABOUT US:</Title>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum.</Title>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.</Title>
            </AboutUsDesc>
        </AboutUsContainer>
            
    )
}