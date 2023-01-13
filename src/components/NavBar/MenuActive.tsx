
import { ResLink } from "../../pages/RestaurantsPage/styles";
import { Menu_active, Res_box, Line, Contact_box} from "./styles";
interface props{
    menu : boolean
}
export const MenuIsActive =(funcProops: props)=>{
    return(
        <Menu_active active = {funcProops.menu}>
        <Res_box>
            <ResLink href="/Restaurants"> Restaurants</ResLink>
            <ResLink href="/Chefs"> Chefs </ResLink>
        </Res_box>
            
            <Line/>
            <Contact_box>
                
                <a>contact us </a>
                <a>Term of Use </a>
                <a>Privacy Policy </a>

            </Contact_box>
           
    </Menu_active>
    )

}