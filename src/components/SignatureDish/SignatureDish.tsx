import { DishCard } from "./DishCard"
import { SignatureDish_Container, Swiper_container, Title } from "./styles"
import {AllRes_box, AllRes_click, AllRes_click_arrows} from "../PopularRes/styles";
import { useSelector } from "react-redux";
import { Dish, Restaurant } from "../../assests/Types";





export const SignatureDish = ()=>{
    const alldishes = useSelector((state: any) => state.dishes.value)
    const Dishes = alldishes.slice(0,4);
    return(
        <SignatureDish_Container>
            <Title>Signature Dish Of:</Title>
                <Swiper_container>
                    {
                    Dishes.map((item:Dish, key:number) => (
                        
                        <DishCard dish= {item} key={key}/>
                    ))
                    }   
                </Swiper_container>
            <AllRes_box>
                <AllRes_click href="/Restaurants">All Restaurants</AllRes_click>
                <AllRes_click_arrows href="/Restaurants"/>
            </AllRes_box>
        </SignatureDish_Container>
            
    )
}