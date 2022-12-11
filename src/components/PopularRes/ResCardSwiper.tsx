import {  Swiper_container } from "./styles"
import { AllRestaurants } from "../../assests/Data"
import { ResCard } from "./ResCard"

const restaurants = AllRestaurants.slice(0,4);
// const card_props = {
//     res: 
// }



export const ResCardSwiper=()=>{
    return(
        <Swiper_container>

        {
            restaurants.map((item, key) => (
                
                <ResCard restaurant= {item} key={item.name}/>
            ))
        }
        
        </Swiper_container>
        

    )
}