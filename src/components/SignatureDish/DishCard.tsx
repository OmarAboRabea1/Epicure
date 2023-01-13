import { Dish } from "../../assests/Types"
import { Card_container, DishCard_desc, DishCard_img, DishCard_price_box, DishCard_signature, DishesCard, DishIngredients, DishIngredients_box, DishName, DishPrice, Shekel_sign } from "./styles";

interface cardProps{
    dish? : Dish;
}

export const DishCard=(dishes: cardProps)=>{
    return(
            <Card_container>
                <DishesCard>
                    <DishCard_img src={dishes.dish?.img}/>
                    <DishCard_desc>
                        <DishIngredients_box>
                        <DishName>{dishes.dish?.name}</DishName>
                            <DishIngredients>{dishes.dish?.describtion}</DishIngredients>
                        </DishIngredients_box>
                    <DishCard_signature sigType={dishes.dish?.category}/>
                    <DishCard_price_box>
                        <Shekel_sign/>
                        <DishPrice>{dishes.dish?.price}</DishPrice>
                    </DishCard_price_box>
                    </DishCard_desc>
                </DishesCard>
            </Card_container>
           
    )
}