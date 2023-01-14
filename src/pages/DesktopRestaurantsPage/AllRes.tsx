import { DesktopContainer, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { AllRestaurants } from "../../assests/Data"
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";
import { useSelector } from "react-redux";
import { Restaurant } from "../../assests/Types";

const AllRes=()=>{

    const all_retaurants = useSelector((state: any) => state.restaurants.value)

    return(
        <>
        {all_retaurants.length > 0 && 
        <DesktopContainer>
            <Cards_container>
                {
                    all_retaurants.map((item:Restaurant, key: number) => (

                        <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                            <ResCard restaurant= {item} key={key}/>
                        </ResLink>
                    ))
                }
            </Cards_container>

        </DesktopContainer>
        }
        </>
    )
}
export default AllRes;