
import { AllRestaurants } from "../../assests/Data";
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { Restaurant } from "../../assests/Types";
import { useCallback, useEffect, useState } from "react";
import { getHoursAndMinutes } from "../../Helpers/GetHoursAndMinutes";
import { useSelector } from "react-redux";
const restaurants = AllRestaurants;

const filter_res=(restaurants: Restaurant[]) => {
    var openRestaurants: Array<Restaurant> = [] 
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    restaurants.map((item:Restaurant) => {
        const open_time = getHoursAndMinutes(item.openedAt[0]);
        const close_time = getHoursAndMinutes(item.openedAt[1]);

        if(hours > open_time.hours || (hours == open_time.hours && minutes>= open_time.minutes))
        {
            if(hours < close_time.hours || (hours == close_time.hours && minutes < close_time.minutes))
            openRestaurants = openRestaurants.concat([] ,item)
        }
    });
    return openRestaurants
}


const OpenRes=()=>{

    const all_retaurants = useSelector((state: any) => state.restaurants.value)
    const [filteredRes, setFilteredRes] = useState<Array<Restaurant>>([])

    useEffect(()=>{
        const filteredRestaurants = filter_res(all_retaurants);
        setFilteredRes(filteredRestaurants);
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
export default OpenRes;