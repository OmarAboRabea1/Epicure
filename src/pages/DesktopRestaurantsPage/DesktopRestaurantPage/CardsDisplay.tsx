import {useParams} from "react-router-dom"; 
import { Container, Cards_container, Empty_Box, Empty_text, Cards_container2} from "../styles";
import { AllDishes, AllRestaurants } from "../../../assests/Data";
import { Dish, Restaurant } from "../../../assests/Types";
import { useEffect, useState } from "react";
import filter from 'lodash/filter';
import { useSelector } from "react-redux";
import FilterInResPage from "../../../components/Desktop/DesktopFilterInResPage/FilterInResPage";
import { DishCard } from "../../../components/Desktop/DesktopSignatureDish/DishCard";
import Filter from "./Filters";

const CardsDisplay=()=>{

    const [choosedDishes, setDishes] = useState<Dish[]>([])

const restaurant_name = useParams()["restaurant_id"]
const restaurants = AllRestaurants;
const all_dishes = useSelector((state: any) => state.dishes.value)


useEffect(()=>{
    choose_dishes();    
},[all_dishes])

const choose_dishes=()=>{
    const dishes: Dish[] = filter(all_dishes, obj => restaurant_name!.includes(obj.restaurant));
    setDishes(dishes)
}

const [breackfast, setBreakfast] = useState(true)
const [launch, setLaunch] = useState(false)
const [dinner, setDinner] = useState(false)
const [dessert, setDessert] = useState(false)

const handleChange = (arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean) => {
    setBreakfast(arg1);
    setLaunch(arg2);
    setDinner(arg3);
    setDessert(arg4);

  };

    return(
        <>
        {all_dishes.length > 0 && 
        <Container>
            <FilterInResPage onChange={handleChange}/>
            <Filter/>
                <Cards_container2>
                {
                    choosedDishes.map((item: Dish, key:number) => (
                        <>
                            {
                                breackfast === true && item.dishType === "Breakfast" &&
                                <> <DishCard dish= {item} key={key}/> </>
                            }
                           
                            {
                                launch === true && item.dishType === "Launch" &&
                                <> <DishCard dish= {item} key={key}/> </>
                            }
                            {
                                dinner === true && item.dishType === "Dinner" &&
                                <> <DishCard dish= {item} key={key}/> </>
                            }
                            {
                                dessert === true && item.dishType === "Dessert" &&
                                <> <DishCard dish= {item} key={key}/> </>
                            }
                        </>    

                        ))                        
                }
            </Cards_container2>
        </Container>
        }
        </>
    )
}
export default CardsDisplay;