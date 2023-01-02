import {  Container_for_cards } from "./styles"
import { AllRestaurants } from "../../../assests/Data"
import { ResCard } from "./ResCard"

const restaurants = AllRestaurants.slice(0,3);
// const card_props = {
//     res: 
// }



export const ResCardGenerator=()=>{
    return(
        <Container_for_cards>

        {
            restaurants.map((item, key) => (
                
                <ResCard restaurant= {item} key={item.name}/>
            ))
        }
        
        </Container_for_cards>
        

    )
}