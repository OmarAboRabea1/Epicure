import {  Container_for_cards } from "./styles"
import { AllRestaurants } from "../../../assests/Data"
import { ResCard } from "./ResCard"
import { ResLink } from "../../../pages/RestaurantsPage/styles";
import { useSelector } from "react-redux";
import { Restaurant } from "../../../assests/Types";

export const ResCardGenerator=()=>{

    const allrestaurants = useSelector((state: any) => state.restaurants.value)
    const restaurants = allrestaurants.slice(0,3);

    return(
        <Container_for_cards>

        {
            restaurants.map((item: Restaurant, key:number) => (
                
                <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                <ResCard restaurant= {item} key={key}/>
                </ResLink>            
                ))
        }
        
        </Container_for_cards>
        

    )
}