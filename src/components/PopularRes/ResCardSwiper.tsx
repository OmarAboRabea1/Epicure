import { PopualrRes_Container, slider_thumbs, ResChef, ResName, RestaurantCard, RestaurantCard_desc, RestaurantCard_img2, Swiper_container } from "./styles"
import { AllRestaurants } from "../../assests/Data"
import { Swiper, SwiperSlide } from 'swiper/react'
import Slider from "react-slick";
import { Navigation, Thumbs } from 'swiper'
import { useState } from "react"
import { ResCard } from "./ResCard"
import claro_Res from "C:/Users/omar_/Desktop/HW/Tsofen/4-theProject/restaurants-project/src/assests/Claro_Res.svg"
import { transform } from "typescript";

const restaurants = AllRestaurants.slice(0,4);
// const card_props = {
//     res: 
// }



export const ResCardSwiper=()=>{
    return(
        <Swiper_container>

        {
            restaurants.map((item, key) => (
                
                <ResCard restaurant= {item} key={item.name}/>
            ))
        }
        
        </Swiper_container>
        

    )
}