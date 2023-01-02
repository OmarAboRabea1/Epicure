import { DishCard } from "./DishCard"
import { SignatureDish_Container, Dishes_container, Title } from "./styles"
import { AllDishes } from "../../../assests/Data"

const Dishes = AllDishes.slice(0,3);


export const DesktopSignatureDish = ()=>{
    return(
        <SignatureDish_Container>
            <Title>Signature Dish Of:</Title>
                <Dishes_container>
                    {
                    Dishes.map((item, key) => (
                        
                        <DishCard dish= {item} key={item.name}/>
                    ))
                    }   
                </Dishes_container>
        </SignatureDish_Container>
            
    )
}