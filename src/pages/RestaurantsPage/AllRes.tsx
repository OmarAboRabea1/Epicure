import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { AllRestaurants } from "../../assests/Data"
import { ResCard } from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

const restaurants = AllRestaurants;
const AllRes=()=>{
    return(
        <Container>
            <Cards_container>
                {
                    restaurants.map((item) => (

                        <ResLink href={item && "/Restaurants/" + item.name } key={uniqid()}>
                            <ResCard restaurant= {item} key={uniqid()}/>
                        </ResLink>
                    ))
                }
            </Cards_container>

        </Container>
        
    )
}
export default AllRes;