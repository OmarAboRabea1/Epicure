import React ,{ useEffect, useState } from "react";
import { isBooleanObject } from "util/types";
import { CartMenuActive } from "./CartMenuActive";
import { MenuIsActive } from "./MenuActive";
import { SearchMenuActive } from "./SearchMenuActive";


import { Nav_Container, StyledNavBar, Left_nav, Right_nav_visible, Logo_img, SearchIcon, UserIcon, 
    CartIcon, Text_box, NavBar_text, NavBar_text2 } from "./styles";
import { UserMenuActive } from "./UserMenuActive";

const DesktopNavBar=()=>{

    const [searchMenu, setSearch] = useState<boolean>(false)
    const [userMenu, setUser] = useState<boolean>(false)
    const [cartMenu, setCart] = useState<boolean>(false)



    useEffect(()=>{
        initialize();
    },[])
    

    const initialize= ()=>{
        const hamburger = document.querySelector(".burger-menu") as HTMLInputElement ;
        const menu = document.querySelector(".menu") as HTMLInputElement ;
        const bar = document.querySelector(".burger-bar");
        if (hamburger != null) {
            hamburger && hamburger.addEventListener("click", ()=>{
                hamburger.classList.toggle("active");
                menu.classList.toggle("active");
        })
        }
        const search = document.querySelector(".search_icon") as HTMLInputElement ;
        const search_menu =  document.querySelector(".search") as HTMLInputElement ;
        
        if (search != null) {
            search && search.addEventListener("click", ()=>{
                search_menu.classList.toggle("active");
    
        })
          }
          const user = document.querySelector(".user_icon") as HTMLInputElement ;
          const user_menu =  document.querySelector(".user") as HTMLInputElement ;
          
          if (user != null) {
              user && user.addEventListener("click", ()=>{
                  user_menu.classList.toggle("active");
      
          })
            }

            const cart = document.querySelector(".cart_icon") as HTMLInputElement ;
            const cart_menu =  document.querySelector(".cart") as HTMLInputElement ;
            
            if (cart != null) {
                cart && cart.addEventListener("click", ()=>{
                    cart_menu.classList.toggle("active");
        
            })
              }
    }
   

    






    return(
        <Nav_Container>
            <StyledNavBar>
                <Left_nav>
                    <NavBar_text href="/">
                        <Logo_img/>
                    </NavBar_text>
                    <Text_box>
                        <NavBar_text href="/">Epicure</NavBar_text>
                    </Text_box>
                    <Text_box>
                        <NavBar_text2 href="/Restaurants">Restaurants</NavBar_text2>
                    </Text_box>
                    <Text_box>
                        <NavBar_text2 href="/Chefs">Chefs</NavBar_text2>
                    </Text_box>
                </Left_nav>
                <Right_nav_visible active = {(!searchMenu) && (!cartMenu) && (!userMenu)}>
                    <SearchIcon onClick={()=>{searchMenu && setSearch(false) || searchMenu!=true && setSearch(true)}}/>
                    <UserIcon onClick={()=>{userMenu && setUser(false) || userMenu!=true && setUser(true)}}/>
                    <CartIcon onClick={()=>{cartMenu && setCart(false) || cartMenu!=true && setCart(true)}}/>
                </Right_nav_visible>
            </StyledNavBar>            
            <SearchMenuActive menu={searchMenu}/>
            <UserMenuActive menu = {userMenu}/>
            <CartMenuActive menu = {cartMenu}/>
        </Nav_Container>
        
    )
}
export default DesktopNavBar;