import { Nav_Container, StyledNavBar, Left_nav, Right_nav_visible, Center_nav_visible, Hamburger, Burger_bar, Logo_img, SearchIcon, UserIcon, 
    CartIcon,  Cart_active, TheX, On_cart, On_cart_img, Search_text, Search_text_h1 } from "./styles";
interface props{
    menu: boolean
}
export const CartMenuActive =(funcProps: props)=>{
    return(

        <Cart_active active = {funcProps.menu}>
        <On_cart>
            <On_cart_img/>
            <h1>YOUR BAG IS EMPTY</h1>
        </On_cart>
        
    </Cart_active>
    )
}