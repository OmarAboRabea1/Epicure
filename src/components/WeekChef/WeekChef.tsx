import { Title } from "../Signature/styles"
import { ChefDesc_box, ChefImage_box, ChefName_box, ChefName_text, Chef_image, WeekChefContainer } from "./styles"
import {AllRes_box, AllRes_click, AllRes_click_arrows, Swiper_container} from "../PopularRes/styles";
import { ChefResCard } from "./ChefResCard";
import { chef_const } from "../../constants/Restaurants4Chefs";
import { GetRestaurants } from "../../Helpers/GetRestaurants";
import uniqid from "uniqid";
import { useSelector } from "react-redux";
import { Restaurant } from "../../assests/Types";
import { useEffect, useState } from "react";
let i = 0;


export const WeekChef=()=>{
    const [res, setRes] = useState<any>()
    useEffect(() => {
      },)
    const chef_with_retaurants = useSelector((state: any) => state.chef.value)
    const restaurants = chef_with_retaurants[0];
    // const restaurants = GetRestaurants()
    console.log(restaurants)

    return(
        <WeekChefContainer>
            <Title>Chef of the week:</Title>
            <ChefImage_box>
                <Chef_image/>
                <ChefName_box>
                    <ChefName_text>{chef_const.name}</ChefName_text>
                </ChefName_box>
            </ChefImage_box>
            <ChefDesc_box>
            <ChefName_text>{chef_const.description}</ChefName_text>
            </ChefDesc_box>
            <Title>Chef of the week:</Title>
            <Swiper_container>
                {
                restaurants.map((item:Restaurant, key:number) => (
                    
                    <ChefResCard restaurant= {item} key={key}/>
                ))
                }
        
            </Swiper_container>
            <AllRes_box>
                <AllRes_click href="/Restaurants">All Restaurants</AllRes_click>
                <AllRes_click_arrows href="/Restaurants"/>
            </AllRes_box>
        </WeekChefContainer>

    )
    
}
