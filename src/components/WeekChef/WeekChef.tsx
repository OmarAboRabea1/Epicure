import { Title } from "../Signature/styles"
import { ChefDesc_box, ChefImage_box, ChefName_box, ChefName_text, Chef_image, WeekChefContainer } from "./styles"
import {AllRes_box, AllRes_click, AllRes_click_arrows, Swiper_container} from "../PopularRes/styles";
import { ChefResCard } from "./ChefResCard";
import { chef_const } from "../../constants/Restaurants4Chefs";
import { useSelector } from "react-redux";
import { Restaurant } from "../../assests/Types";
import { ResLink } from "../../pages/RestaurantsPage/styles";


export const WeekChef=()=>{
    
    const chef_with_retaurants = useSelector((state: any) => state.chef.value)

    return(
        <>
        {chef_with_retaurants.length > 0 && 
        <WeekChefContainer>
            <Title>Chef of the week:</Title>
            <ChefImage_box href={"/Chefs/" + chef_with_retaurants[0].name}>
                <Chef_image src={chef_with_retaurants[0].img}/>
                <ChefName_box>
                    <ChefName_text>{chef_with_retaurants[0].name}</ChefName_text>
                </ChefName_box>
            </ChefImage_box>
            <ChefDesc_box>
            <ChefName_text>{chef_with_retaurants[0].describtion}</ChefName_text>
            </ChefDesc_box>
            <Title>Chef of the week:</Title>
            <Swiper_container>
                {
                chef_with_retaurants[0].restaurants.map((item:Restaurant, key:number) => (

                    <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                        <ChefResCard restaurant= {item} key={key}/>
                    </ResLink>
                ))
                }
        
            </Swiper_container>
            <AllRes_box>
                <AllRes_click href="/Restaurants">All Restaurants</AllRes_click>
                <AllRes_click_arrows href="/Restaurants"/>
            </AllRes_box>
        </WeekChefContainer>
            }
            </>
    )
    
}
