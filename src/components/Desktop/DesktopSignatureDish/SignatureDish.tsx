import { DishCard } from "./DishCard"
import { SignatureDish_Container, Dishes_container, Title } from "./styles"
import { AllDishes } from "../../../assests/Data"
import { Dish } from "../../../assests/Types";
import { useSelector } from "react-redux";

export const DesktopSignatureDish = ()=>{
    const alldishes = useSelector((state: any) => state.dishes.value)
    const Dishes = alldishes.slice(0,3);
    return(
        <SignatureDish_Container>
            <Title>Signature Dish Of:</Title>
                <Dishes_container>
                {
                    Dishes.map((item:Dish, key:number) => (
                        
                        <DishCard dish= {item} key={key}/>
                    ))
                    }   
                </Dishes_container>
        </SignatureDish_Container>
            
    )
}