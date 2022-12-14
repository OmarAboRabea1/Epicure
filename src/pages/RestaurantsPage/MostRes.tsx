
import { AllRestaurants } from "../../assests/Data";
import { ResCard } from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { Restaurant } from "../../assests/Types";
import { useEffect, useState } from "react";
const restaurants = AllRestaurants;
var mostRestaurants: Array<Restaurant> = [] 
const MostRes=()=>{

    const [filteredRes, setFilteredRes] = useState<Array<Restaurant>>([])

    const filter_res=()=>{
        restaurants.map((item:Restaurant) => {
            if(Number(item.establishedAt) < 2018){
                mostRestaurants = mostRestaurants.concat([] ,item)
            }
        });
        return mostRestaurants
    }

    useEffect(()=>{
        const filteredRestaurants = filter_res();
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
export default MostRes;