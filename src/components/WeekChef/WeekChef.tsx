import { Title } from "../Signature/styles"
import { ChefDesc_box, ChefImage_box, ChefName_box, ChefName_text, Chef_image, WeekChefContainer } from "./styles"
import {AllRes_box, AllRes_click, AllRes_click_arrows, Swiper_container} from "../PopularRes/styles";
import { ChefResCard } from "./ChefResCard";
import { chef_const } from "../../constants/Restaurants4Chefs";
import { GetRestaurants } from "../../Helpers/GetRestaurants";

let i = 0;


export const WeekChef=()=>{

    const restaurants = GetRestaurants();


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
                restaurants.map((item, key) => (
                    
                    <ChefResCard restaurant= {item} key={item.name[-1]}/>
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
