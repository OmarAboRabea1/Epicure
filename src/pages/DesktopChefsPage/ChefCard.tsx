import { Chef, Restaurant } from "../../assests/Types"
import { ChefImage_box, ChefName_box, ChefName_text, Chef_image, WeekChefContainer } from "./styles";

interface cardProps{
    chef: Chef
}

export const ChefCard=(chef: cardProps)=>{

    return(
        <WeekChefContainer>
            <ChefImage_box href={"/Chefs/" + chef.chef.name}>
                <Chef_image src={chef.chef.img}/>
                <ChefName_box>
                    <ChefName_text>{chef.chef.name}</ChefName_text>
                </ChefName_box>
            </ChefImage_box>
        </WeekChefContainer>
           
    )
}
