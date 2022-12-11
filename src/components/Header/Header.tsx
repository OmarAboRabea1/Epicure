import React ,{ useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Header_Container } from "./styles";




const Header=()=>{
    return(
        <Header_Container>
            <NavBar/>
        </Header_Container>
    )
}
export default Header;
