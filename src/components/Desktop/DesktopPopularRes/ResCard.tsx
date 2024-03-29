import { Card_container2, PopualrRes_Container, ResChef, ResName, RestaurantCard, RestaurantCard_desc, RestaurantCard_img } from "./styles"
import { Restaurant } from "../../../assests/Types"


interface cardProps{
    restaurant? : Restaurant;
}
export const ResCard=(restaurant: cardProps)=>{

    return(
        <Card_container2>
            <RestaurantCard>
                <RestaurantCard_img src={restaurant.restaurant?.img}/>
                <RestaurantCard_desc>
                    <ResName>{restaurant.restaurant?.name}</ResName>                    
                    <ResChef>{restaurant.restaurant?.chef}</ResChef>
                </RestaurantCard_desc>
            </RestaurantCard>
        </Card_container2>
           
    )
}
