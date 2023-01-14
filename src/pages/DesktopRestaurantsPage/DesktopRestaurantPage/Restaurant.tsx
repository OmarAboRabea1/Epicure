import {useParams} from "react-router-dom"; 
import uniqid from "uniqid";
import { getHoursAndMinutes } from "../../../Helpers/GetHoursAndMinutes";
import clockIcon from "../../../assests/Icon/Clock.svg"
import { Container, Cards_container, ResImg, Res_container, Title, Secondary_title, Description, Box, ResImg_box, ClockImg } from "../styles";
import Header from "../../../components/Header/Header";
import { AllDishes, AllRestaurants } from "../../../assests/Data";
import { Dish, Restaurant } from "../../../assests/Types";
import { useSelector } from "react-redux";
import CardsDisplay from "./CardsDisplay";
import DesktopFooter from "../../../components/Desktop/DesktopFooter/Footer";

const DesktopRestaurantPage=()=>{
const restaurant_id = useParams()["restaurant_id"]
const restaurants = useSelector((state: any) => state.restaurants.value)


const is_open=(item:Restaurant)=>{
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const open_time = getHoursAndMinutes(item.openedAt[0]);
    const close_time = getHoursAndMinutes(item.openedAt[1]);

    if(hours > open_time.hours || (hours == open_time.hours && minutes>= open_time.minutes))
    {
        if(hours < close_time.hours || (hours == close_time.hours && minutes < close_time.minutes))
        return true
    }
}

    return(
        <>
        {restaurants.length > 0 && 

        <Container>
            <Header/>
            <Res_container>
            {
                    restaurants.map((item:Restaurant, key:number) => (
                        item.name == restaurant_id &&
                        <>
                        <ResImg_box>
                            <ResImg src={item.img} key={key}/>
                        </ResImg_box>
                        <Description>
                            <Title>{item.name}</Title>
                            <Secondary_title>{item.chef}</Secondary_title>
                            {
                                is_open(item)==true &&
                                <Box>
                                <ClockImg src={clockIcon} key={key}/>
                                <Secondary_title>Open now</Secondary_title>
                                </Box> 
                            }
                        </Description>
                        <CardsDisplay/>
                        </>

                    ))
                }

            </Res_container>  
            <DesktopFooter/>      
        </Container>
        }
        </>
    )
}
export default DesktopRestaurantPage;