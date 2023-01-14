
import { AllRestaurants } from "../../assests/Data";
import  ResCard from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { Restaurant } from "../../assests/Types";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const restaurants = AllRestaurants;
const filter_res2=(restaurants: Restaurant[]) => {
    var mostRestaurants: Array<Restaurant> = [] 
    restaurants.map((item:Restaurant) => {
        if(Number(item.establishedAt) < 2012){
            mostRestaurants = mostRestaurants.concat([] ,item)
        }
    });
    return mostRestaurants
}
const MostRes=()=>{
    
    const all_retaurants = useSelector((state: any) => state.restaurants.value)
    const [filteredRes, setFilteredRes] = useState<Array<Restaurant>>([])

    useEffect(()=>{
        const filteredRestaurants = filter_res2(all_retaurants);
        setFilteredRes(filteredRestaurants)
    }, [])

    
    return(
        <>
        {filteredRes.length > 0 && 
        <Container>
            <Cards_container>
                {
                    filteredRes.map((item: Restaurant, key: number) => (
                        
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
export default MostRes;