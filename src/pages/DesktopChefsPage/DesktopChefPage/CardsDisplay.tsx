import {useParams} from "react-router-dom"; 
import { Container, Cards_container, Empty_Box, Empty_text, Cards_container2, ResImg, Description, Title, Secondary_title, ResLink} from "../styles";
import { Chef, Dish, Restaurant } from "../../../assests/Types";
import { useSelector } from "react-redux";
import { Container_for_cards } from "../../../components/Desktop/DesktopWeekChef/styles";
import { ChefResCard } from "../../../components/Desktop/DesktopWeekChef/ChefResCard";

interface cardProps{
    restaurants? : Array<Restaurant>;
}

const CardsDisplay=(restaurants: cardProps)=>{


const chefs = useSelector((state: any) => state.chefs.value)

    return(
        <>
        {chefs.length > 0 && 
            <Container>
                 <Container_for_cards>
            {
                restaurants.restaurants?.map((item:Restaurant, key:number) => (
                    
                    <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                        <ChefResCard restaurant= {item} key={key}/>
                    </ResLink>               
                    ))
            }
        
            </Container_for_cards>
            </Container>
        }
        </>
    )
}
export default CardsDisplay;