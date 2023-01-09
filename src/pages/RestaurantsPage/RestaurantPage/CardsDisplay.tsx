import {useParams} from "react-router-dom"; 
import uniqid from "uniqid";
import { getHoursAndMinutes } from "../../../Helpers/GetHoursAndMinutes";
import clockIcon from "../../../assests/Icon/Clock.svg"
import { Container, Cards_container, ResImg, Res_container, Title, Secondary_title, Description, Box } from "../styles";
import Header from "../../../components/Header/Header";
import { AllDishes, AllRestaurants } from "../../../assests/Data";
import { Restaurant } from "../../../assests/Types";
import { useState } from "react";
import FilterInResPage from "../../../components/Desktop/FilterInResPage/FilterInResPage";
import { DishCard } from "../../../components/SignatureDish/DishCard";

const CardsDisplay=()=>{
const restaurant_id = useParams()["restaurant_id"]
const restaurants = AllRestaurants;
const Dishes = AllDishes.slice(0,4);

const [breackfast, setBreakfast] = useState(true)
const [launch, setLaunch] = useState(false)
const [dinner, setDinner] = useState(false)

const handleChange = (arg1: boolean, arg2: boolean, arg3: boolean) => {
    setBreakfast(arg1);
    setLaunch(arg2);
    setDinner(arg3);
  };

    return(
        <Container>

            <Cards_container>
                {
                    Dishes.map((item, key) => (
                    <>
                        {
                            breackfast === true && item.dishType === "breakfast" &&
                            <> 
                                <DishCard dish= {item} key={item.name}/>                                        
                            </>
                        }
                        
                        {
                            launch === true && item.dishType === "launch" &&
                            <>
                                <DishCard dish= {item} key={item.name}/>                                        
                            </>
                        }
                        {
                            dinner === true && item.dishType === "dinner" &&
                            <> 
                                <DishCard dish= {item} key={item.name}/>                                        
                            </>
                        }
                    </>    

                    ))                            
                }
            </Cards_container>


        </Container>
        
    )
}
export default CardsDisplay;