import React ,{ useEffect, useState } from "react";

import logo from "C:/Users/omar_/Desktop/HW/Tsofen/4-theProject/restaurants-project/src/assests/restaurant logo.png";
import search_icon_img from "C:/Users/omar_/Desktop/HW/Tsofen/4-theProject/restaurants-project/src/assests/searchIcon.png";
import user_icon_img from "C:/Users/omar_/Desktop/HW/Tsofen/4-theProject/restaurants-project/src/assests/userIcon.png";
import cart_icon_img from "C:/Users/omar_/Desktop/HW/Tsofen/4-theProject/restaurants-project/src/assests/cartIcon.png";
import { Nav_Container, StyledNavBar, Left_nav, Right_nav_hidden, Right_nav_visible, Center_nav_visible, Hamburger, Burger_bar, Logo_img, SearchIcon, UserIcon, 
    CartIcon, Search_active, Menu_active, Res_box, Line, Contact_box, User_active, Cart_active, TheX, On_cart, On_cart_img, Search_text, Search_text_h1,
     Search_box, Search_input, On_search_img, Sign_in_box, User_text, User_text2, Sign_in_box1, Email_box, InputMail_text, Mail_input, Password_box,
      InputPass_text, Pass_input, Log_in_box, Log_in_button, Login_text, Or_line, Sign_up_box } from "./styles";

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
                 <Search_text active ={searchMenu}>
                    <Search_text_h1>Search</Search_text_h1>
                </Search_text>
                <Left_nav>
                    <TheX active = {burgerMenu || searchMenu || userMenu || cartMenu } onClick={()=>{setBurger(false); setSearch(false); setCart(false); setUser(false)}}/>
                    <Hamburger  active = {(!burgerMenu) && (!searchMenu) && (!cartMenu) && (!userMenu)} onClick={()=>{setBurger(true) }}>
                        <Burger_bar/>
                        <Burger_bar/>
                        <Burger_bar/>
                    </Hamburger>
                </Left_nav>
                
                <Center_nav_visible active = {(!burgerMenu) && (!searchMenu) && (!cartMenu) && (!userMenu)}>
                    <Logo_img/>
                </Center_nav_visible>

                <Right_nav_visible active = {(!burgerMenu) && (!searchMenu) && (!cartMenu) && (!userMenu)}>
                    <SearchIcon onClick={()=>{setSearch(true) }}/>
                    <UserIcon onClick={()=>{setUser(true) }}/>
                    <CartIcon onClick={()=>{setCart(true) }}/>
                </Right_nav_visible>
            </StyledNavBar>


           

            
            <Menu_active active = {burgerMenu}>
                <Res_box>
                    <a> Restaurants</a>
                    <a> Chefs</a>
                </Res_box>
                    
                    <Line/>
                    <Contact_box>
                        
                        <a>contact us </a>
                        <a>Term of Use </a>
                        <a>Privacy Policy </a>

                    </Contact_box>
                   
            </Menu_active>

            <Search_active active = {searchMenu}>
                <Search_box>
                    <On_search_img/>
                    <Search_input placeholder="Search for restaurant cuisine, chef"/>
                </Search_box>
            </Search_active>

            <User_active active = {userMenu}>
                <Sign_in_box>
                    <Sign_in_box1>
                        <User_text>SIGN IN</User_text>
                        <User_text2>To continue the order, please sign in</User_text2>
                    </Sign_in_box1>
                    <Email_box>
                        <InputMail_text>Email address</InputMail_text>
                        <Mail_input />
                    </Email_box>
                    <Password_box>
                        <InputPass_text>Password</InputPass_text>
                        <Pass_input type={"password"}/>
                    </Password_box>
                    <Log_in_box>
                    <Log_in_button>LOGIN</Log_in_button>
                    <a href="#">
                        <Login_text>Forget password?</Login_text>
                    </a>
                    </Log_in_box>
                    <Or_line/>
                    <Sign_up_box>SIGN UP</Sign_up_box>
                </Sign_in_box>

            </User_active>


            <Cart_active active = {cartMenu}>
                <On_cart>
                    <On_cart_img/>
                    <h1>YOUR BAG IS EMPTY</h1>
                </On_cart>
                
            </Cart_active>

        </Nav_Container>
    )
}
export default NavBar;