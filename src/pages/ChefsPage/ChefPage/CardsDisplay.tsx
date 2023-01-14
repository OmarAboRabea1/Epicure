import {useParams} from "react-router-dom"; 
import { Container, Cards_container, Empty_Box, Empty_text, Cards_container2, ResImg, Description, Title, Secondary_title, ResLink} from "../styles";
import { Chef, Dish, Restaurant } from "../../../assests/Types";
import { useSelector } from "react-redux";
import { Container_for_cards, Container_for_cards3 } from "../../../components/Desktop/DesktopWeekChef/styles";
import { ChefResCard } from "../../../components/WeekChef/ChefResCard";
import { Swiper_container } from "../../../components/PopularRes/styles";

interface cardProps{
    restaurants? : Array<Restaurant>;
}

const CardsDisplay=(restaurants: cardProps)=>{


const chefs = useSelector((state: any) => state.chefs.value)

    return(
        <>
        {chefs.length > 0 && 
            <Container>
                 <Container_for_cards3>
            {
                restaurants.restaurants?.map((item:Restaurant, key:number) => (
                    
                    <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                        <Swiper_container>
                            <ChefResCard restaurant= {item} key={key}/>
                        </Swiper_container>
                    </ResLink>               
                    ))
            }
        
            </Container_for_cards3>
            </Container>
        }
        </>
    )
}
export default CardsDisplay;