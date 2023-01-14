import React ,{ useEffect, useState } from "react";
import { isBooleanObject } from "util/types";
import { CartMenuActive } from "./CartMenuActive";
import { MenuIsActive } from "./MenuActive";
import { SearchMenuActive } from "./SearchMenuActive";


import { Nav_Container, StyledNavBar, Left_nav, Right_nav_visible, Center_nav_visible, Hamburger, Burger_bar, Logo_img, SearchIcon, UserIcon, 
    CartIcon,  Cart_active, TheX, On_cart, On_cart_img, Search_text, Search_text_h1, Box_for_serch, Link_to } from "./styles";
import { UserMenuActive } from "./UserMenuActive";

const NavBar=()=>{

    const [burgerMenu, setBurger] = useState<boolean>(false)
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
                    <TheX active = {burgerMenu || searchMenu || userMenu || cartMenu } onClick={()=>{setBurger(false); setSearch(false); setCart(false); setUser(false)}}/>
                    <Hamburger  active = {(!burgerMenu) && (!searchMenu) && (!cartMenu) && (!userMenu)} onClick={()=>{setBurger(true) }}>
                        <Burger_bar/>
                        <Burger_bar/>
                        <Burger_bar/>
                    </Hamburger>
                </Left_nav>
                <Center_nav_visible active = {(!burgerMenu) && (!searchMenu) && (!cartMenu) && (!userMenu)}>
                    <Link_to href="/">
                        <Logo_img/>
                    </Link_to>
                </Center_nav_visible>
                <Right_nav_visible active = {(!burgerMenu) && (!searchMenu) && (!cartMenu) && (!userMenu)}>
                    <SearchIcon onClick={()=>{setSearch(true) }}/>
                    <UserIcon onClick={()=>{setUser(true) }}/>
                    <CartIcon onClick={()=>{setCart(true) }}/>
                </Right_nav_visible>
                <Search_text active ={searchMenu}>
                    <Box_for_serch>
                        <Search_text_h1>Search</Search_text_h1>
                    </Box_for_serch>
                </Search_text>
            </StyledNavBar>            
            <MenuIsActive menu = {burgerMenu}/>
            <SearchMenuActive menu={searchMenu}/>
            <UserMenuActive menu = {userMenu}/>
            <CartMenuActive menu = {cartMenu}/>
        </Nav_Container>
    )
}
export default NavBar;