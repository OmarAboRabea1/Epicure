import { Card_container2, PopualrRes_Container, ResChef, ResName, RestaurantCard, RestaurantCard_desc, RestaurantCard_img } from "./styles"
import { Restaurant } from "../../assests/Types"
import { setDishesID } from "../redux/dishesID/DishesIDSlicer";
import { useDispatch, connect } from "react-redux";


interface cardProps{
    restaurant? : Restaurant;
}
const ResCard=(restaurant: cardProps)=>{
    const dispatch = useDispatch;
    const handleClick =()=>{
    }
    return(
        <Card_container2>
            <RestaurantCard onClick={()=>{handleClick()}}>
                <RestaurantCard_img src={restaurant.restaurant?.img}/>
                <RestaurantCard_desc>
                    <ResName>{restaurant.restaurant?.name}</ResName>                    
                    <ResChef>{restaurant.restaurant?.chef}</ResChef>
                </RestaurantCard_desc>
            </RestaurantCard>
        </Card_container2>
           
    )
}
export default ResCard