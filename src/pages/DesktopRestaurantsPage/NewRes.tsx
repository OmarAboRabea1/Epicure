
import { AllRestaurants } from "../../assests/Data";
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { Restaurant } from "../../assests/Types";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const restaurants = AllRestaurants;
const filter_res=(restaurants:Restaurant[]) => {
    var newRestaurants: Array<Restaurant> = [] 
    restaurants.map((item:Restaurant) => {
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
        <>
        {all_retaurants.length > 0 && 
        <Container>
            <Cards_container>
                {
                    filteredRes.map((item, key:number) => (
                        
                        <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                            <ResCard restaurant= {item} key={key}/>
                        </ResLink>                    
                    ))
                }
            </Cards_container>        
        </Container>
        }
        </>
        
    )
}
export default NewRes;