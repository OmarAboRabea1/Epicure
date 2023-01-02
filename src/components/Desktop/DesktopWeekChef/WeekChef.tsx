import { Title } from "../../Signature/styles"
import { Box_for_chef_details, ChefDesc_box, ChefImage_box, ChefName_box, ChefName_text, ChefName_text_box, Chef_image, Container_for_cards, Title_for_chef, Title_for_chef_res, WeekChefContainer } from "./styles"
import { ChefResCard } from "./ChefResCard";
import { chef_const } from "../../../constants/Restaurants4Chefs";
import { GetRestaurants } from "../../../Helpers/GetRestaurants";

let i = 0;


export const DesktopWeekChef=()=>{

    const restaurants = GetRestaurants();
    const chef_restaurants = restaurants.slice(0,3);



    return(
        <WeekChefContainer>
            <Title_for_chef>
                <Title>Chef of the week:</Title>
            </Title_for_chef>
            <Box_for_chef_details>
                <ChefImage_box>
                    <Chef_image/>
                    <ChefName_box>
                        <ChefName_text>{chef_const.name}</ChefName_text>
                    </ChefName_box>
                </ChefImage_box>
                <ChefDesc_box>
                    <ChefName_text_box>
                        <ChefName_text>{chef_const.description}</ChefName_text>
                    </ChefName_text_box>
                </ChefDesc_box>
            </Box_for_chef_details>
            <Title_for_chef_res>
                <Title>{chef_const.name}'s Restaurants</Title>
            </Title_for_chef_res>
            <Container_for_cards>
                {
                chef_restaurants.map((item, key) => (
                    
                    <ChefResCard restaurant= {item} key={item.name[-1]}/>
                ))
                }
        
            </Container_for_cards>
        </WeekChefContainer>

    )
    
}
