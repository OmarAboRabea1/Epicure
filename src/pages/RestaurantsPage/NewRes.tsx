
import { AllRestaurants } from "../../assests/Data";
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { Restaurant } from "../../assests/Types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const restaurants = AllRestaurants;
const filter_res=(restaurant: Restaurant[])=>{
    var newRestaurants: Array<Restaurant> = [] 
    restaurant.map((item:Restaurant) => {
        if(Number(item.establishedAt) > 2012){
            newRestaurants = newRestaurants.concat([] ,item)
        }
    });
    return newRestaurants
}
const NewRes=()=>{

    const all_retaurants = useSelector((state: any) => state.restaurants.value)
    const [filteredRes, setFilteredRes] = useState<Array<Restaurant>>([])



    useEffect(()=>{
        const filteredRestaurants = filter_res(all_retaurants);
        setFilteredRes(filteredRestaurants)
    },[])

    
    return(
        <Container>
            <Cards_container>
                {
                    filteredRes.map((item) => (
                        
                        <ResLink href={item && "/Restaurants/" + item.name } key={uniqid()}>
                            <ResCard restaurant= {item} key={uniqid()}/>
                        </ResLink>                    
                    ))
                }
            </Cards_container>        
        </Container>
        
    )
}
export default NewRes;