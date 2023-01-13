import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { AllRestaurants } from "../../assests/Data"
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";
import { useSelector } from "react-redux";
import { Restaurant } from "../../assests/Types";
import { useDispatch } from "react-redux";

const restaurants = AllRestaurants;
const AllRes=()=>{

    const all_retaurants = useSelector((state: any) => state.restaurants.value)

    return(
        <>
        {all_retaurants.length > 0 && 
        <Container>
            <Cards_container>
                {
                    all_retaurants.map((item:Restaurant) => (

                        <ResLink href={item && "/Restaurants/" + item.name } key={uniqid()}>
                            <ResCard restaurant= {item} key={uniqid()}/>
                        </ResLink>
                    ))
                }
            </Cards_container>

        </Container>
        }
        </>
    )
}
export default AllRes;