
import { AllRestaurants } from "../../assests/Data";
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink } from "./styles";
import { Restaurant } from "../../assests/Types";
import { useEffect, useState } from "react";
import { getHoursAndMinutes } from "../../Helpers/GetHoursAndMinutes";
import { useSelector } from "react-redux";
const restaurants = AllRestaurants;
var openRestaurants: Array<Restaurant> = [] 
const OpenRes=()=>{

    const all_retaurants = useSelector((state: any) => state.restaurants.value)
    const [filteredRes, setFilteredRes] = useState<Array<Restaurant>>([])

    const filter_res=()=>{
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        all_retaurants.map((item:Restaurant) => {
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
export default OpenRes;