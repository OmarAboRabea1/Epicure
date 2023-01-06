import { Container, UnderlinedSpan, Title, Title_box, Cards_container } from "./styles";
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
                        
                        <ResCard restaurant= {item} key={uniqid()}/>
                    ))
                }
            </Cards_container>

        </Container>
        
    )
}
export default AllRes;