
import { AllRestaurants } from "../../assests/Data";
import { ResCard } from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container } from "./styles";
import { Restaurant } from "../../assests/Types";
import { useEffect, useState } from "react";
const restaurants = AllRestaurants;
var newRestaurants: Array<Restaurant> = [] 
const NewRes=()=>{

    const [filteredRes, setFilteredRes] = useState<Array<Restaurant>>([])

    const filter_res=()=>{
        restaurants.map((item:Restaurant) => {
            if(Number(item.establishedAt) > 2010){
                newRestaurants = newRestaurants.concat([] ,item)
            }
        });
        return newRestaurants
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
                        
                        <ResCard restaurant= {item} key={uniqid()}/>
                    ))
                }
            </Cards_container>        
        </Container>
        
    )
}
export default NewRes;