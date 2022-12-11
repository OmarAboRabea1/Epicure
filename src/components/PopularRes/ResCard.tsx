import { Card_container2, PopualrRes_Container, ResChef, ResName, RestaurantCard, RestaurantCard_desc, RestaurantCard_img } from "./styles"
import { AllRestaurants } from "../../assests/Data"
import { Restaurant } from "../../assests/Types"

interface cardProps{
    restaurant? : Restaurant;
}
export const ResCard=(restaurant: cardProps)=>{
    return(
        <Card_container2>
            <RestaurantCard>
                <RestaurantCard_img/>
                <RestaurantCard_desc>
                    <ResName>{restaurant.restaurant?.name}</ResName>                    
                    <ResChef>{restaurant.restaurant?.owner}</ResChef>
                </RestaurantCard_desc>
            </RestaurantCard>
        </Card_container2>
           
    )
}