import {  Swiper_container } from "./styles"
import ResCard  from "./ResCard"
import { useSelector } from "react-redux";
import { Restaurant } from "../../assests/Types";
import { ResLink } from "../../pages/RestaurantsPage/styles";

export const ResCardSwiper=()=>{
    
    const allrestaurants = useSelector((state: any) => state.restaurants.value)
    const restaurants = allrestaurants
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