import { Card_container2, ResChef, ResName, RestaurantCard, RestaurantCard_desc, RestaurantCard_img, Restaurant_img } from "./styles"
import { Restaurant } from "../../assests/Types"

interface cardProps{
    restaurant? : Restaurant;
}
export const ChefResCard=(restaurant: cardProps)=>{
    return(
        <Card_container2>
            <RestaurantCard>
                <Restaurant_img src= {restaurant.restaurant?.img}/>
                <RestaurantCard_img/>
                <RestaurantCard_desc>
                    <ResName>{restaurant.restaurant?.name}</ResName>                    
                </RestaurantCard_desc>
            </RestaurantCard>
        </Card_container2>
           
    )
}