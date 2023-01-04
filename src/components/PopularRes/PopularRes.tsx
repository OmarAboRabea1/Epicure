import { ResCardSwiper } from "./ResCardSwiper"
import { AllRes_box, AllRes_click, AllRes_click_arrows, PopualrRes_Container, Swiper_container, Title } from "./styles"


export const PopularRes = ()=>{
    return(
            <PopualrRes_Container>
                <Title>popular restaurant in epicure:</Title>  
                <ResCardSwiper/>
                <AllRes_box>
                    <AllRes_click href="/Restaurants">All Restaurants</AllRes_click>
                    <AllRes_click_arrows href="/Restaurants"/>
                </AllRes_box>
            </PopualrRes_Container>
            
    )
}