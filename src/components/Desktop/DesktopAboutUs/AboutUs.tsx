
import {Title} from "../DesktopPopularRes/styles";
import { AboutUsContainer, AboutUsDesc, AboutUsimages, AppleStore_image, EpicureLogo_image, Logo_box, PlayStore_image, Stores_box } from "./styles";



export const DesktopAboutUs = ()=>{
    return(
        <AboutUsContainer>

            <AboutUsimages>
                <AboutUsDesc>
                    <Title>ABOUT US:</Title>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
    eu ipsum. Cras porta malesuada eros, eget blandit
    turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
    dignissim a vestibulum.</Title>
                    <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
    eu ipsum. Cras porta malesuada eros.</Title>
                </AboutUsDesc>
                <Stores_box>
                    <PlayStore_image/>
                    <AppleStore_image/>
                </Stores_box>
            </AboutUsimages>
            <Logo_box>
                <EpicureLogo_image/>
            </Logo_box>
        </AboutUsContainer>
            
    )
}