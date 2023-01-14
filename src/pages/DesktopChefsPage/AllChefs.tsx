import { DesktopContainer, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { AllRestaurants } from "../../assests/Data"
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";
import { useSelector } from "react-redux";
import { Chef, Restaurant } from "../../assests/Types";
import { ChefCard } from "./ChefCard";

const AllChefs=()=>{

    const all_chefs = useSelector((state: any) => state.chefs.value)

    return(
        <>
        {all_chefs.length > 0 && 
        <DesktopContainer>
            <Cards_container>
                {
                    all_chefs.map((item:Chef, key: number) => (

                        <ChefCard chef= {item} key={key}/>

                    ))
                }
            </Cards_container>

        </DesktopContainer>
        }
        </>
    )
}
export default AllChefs;