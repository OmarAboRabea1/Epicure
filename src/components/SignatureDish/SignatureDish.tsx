import { DishCard } from "./DishCard"
import { SignatureDish_Container, Swiper_container, Title } from "./styles"
import { AllDishes } from "../../assests/Data"
import {AllRes_box, AllRes_click, AllRes_click_arrows} from "../PopularRes/styles";

const Dishes = AllDishes.slice(0,4);


export const SignatureDish = ()=>{
    return(
        <SignatureDish_Container>
            <Title>Signature Dish Of:</Title>
                <Swiper_container>
                    {
                    Dishes.map((item, key) => (
                        
                        <DishCard dish= {item} key={item.name}/>
                    ))
                    }   
                </Swiper_container>
            <AllRes_box>
                <AllRes_click href="#">All Restaurants</AllRes_click>
                <AllRes_click_arrows href="#"/>
            </AllRes_box>
        </SignatureDish_Container>
            
    )
}