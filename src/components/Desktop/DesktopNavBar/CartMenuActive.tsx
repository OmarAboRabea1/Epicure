import { Cart_active, On_cart, On_cart_img, Box_for_img, Order_history_box, Order_history_text } from "./styles";
interface props{
    menu: boolean
}
export const CartMenuActive =(funcProps: props)=>{
    return(

        <Cart_active active = {funcProps.menu}>
        <On_cart>
            <Box_for_img>
                <On_cart_img/>  
            </Box_for_img>
            <h1>YOUR BAG IS EMPTY</h1>

        </On_cart>
        <Order_history_box>
                <Order_history_text href="#">Order History</Order_history_text>
            </Order_history_box>
    </Cart_active>
    )
}