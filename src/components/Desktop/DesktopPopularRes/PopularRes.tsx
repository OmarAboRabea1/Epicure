import { ResCardGenerator } from "./ResCardGenerator"
import { AllRes_box, AllRes_click, AllRes_click_arrows, PopualrRes_Container, Title } from "./styles"


export const DesktopPopularRes = ()=>{
    return(
            <PopualrRes_Container>
                <Title>popular restaurant in epicure:</Title>  
                <ResCardGenerator/>
                <AllRes_box>
                    <AllRes_click_arrows href="/Restaurants"/>
                    <AllRes_click href="/Restaurants">All Restaurants</AllRes_click>
                </AllRes_box>
            </PopualrRes_Container>
            
    )
}