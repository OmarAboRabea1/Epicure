import {  Swiper_container } from "./styles"
import ResCard  from "./ResCard"
import { useSelector } from "react-redux";
import { Restaurant } from "../../assests/Types";
import { ResLink } from "../../pages/RestaurantsPage/styles";


// const card_props = {
//     res: 
// }



export const ResCardSwiper=()=>{
    
    const allrestaurants = useSelector((state: any) => state.restaurants.value)
    const restaurants = allrestaurants.slice(0,4);
    return(
        <Swiper_container>

        {
            restaurants.map((item: Restaurant, key: number) => (
                
                <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                <ResCard restaurant= {item} key={key}/>
                </ResLink>
            ))
        }
        
        </Swiper_container>
        

    )
}