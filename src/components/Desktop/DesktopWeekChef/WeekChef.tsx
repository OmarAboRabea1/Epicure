import { Title } from "../../Signature/styles"
import { Box_for_chef_details, ChefDesc_box, ChefImage_box, ChefName_box, ChefName_text, ChefName_text_box, Chef_image, Container_for_cards, Title_for_chef, Title_for_chef_res, WeekChefContainer } from "./styles"
import { ChefResCard } from "./ChefResCard";
import { useSelector } from "react-redux";
import { Restaurant } from "../../../assests/Types";
import { ResLink } from "../../../pages/DesktopRestaurantsPage/styles";
import { Link_to } from "../../NavBar/styles";

export const DesktopWeekChef=()=>{

    const chef_with_retaurants = useSelector((state: any) => state.chef.value)


    return(
        <>
        {chef_with_retaurants.length > 0 && 
        <WeekChefContainer>
            <Title_for_chef>
                <Title>Chef of the week:</Title>
            </Title_for_chef>
            <Box_for_chef_details>
                <ChefImage_box href={"/Chefs/" + chef_with_retaurants[0].name}>
                        <Chef_image src={chef_with_retaurants[0].img}/>
                    <ChefName_box>
                        <ChefName_text>{chef_with_retaurants[0].name}</ChefName_text>
                    </ChefName_box>
                </ChefImage_box>
                <ChefDesc_box>
                    <ChefName_text_box>
                        <ChefName_text>{chef_with_retaurants[0].describtion}</ChefName_text>
                    </ChefName_text_box>
                </ChefDesc_box>
            </Box_for_chef_details>
            <Title_for_chef_res>
                <Title>{chef_with_retaurants[0].name}'s Restaurants</Title>
            </Title_for_chef_res>
            <Container_for_cards>
            {
                chef_with_retaurants[0].restaurants.map((item:Restaurant, key:number) => (
                    
                    <ResLink href={item && "/Restaurants/" + item.name } key={key}>
                        <ChefResCard restaurant= {item} key={key}/>
                    </ResLink>               
                    ))
            }
        
            </Container_for_cards>
        </WeekChefContainer>
        }
        </>

    )
    
}
