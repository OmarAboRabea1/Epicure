import React ,{ useEffect, useState } from "react";
import SetWindowSize from "../../Helpers/SetWindowSize";
import DesktopNavBar from "../Desktop/DesktopNavBar/DesktopNavBar";
import NavBar from "../NavBar/NavBar";
import { Header_Container } from "./styles";




const Header=()=>{
    const [windowSize, setWindowSize] = useState<Number>()
    var size = SetWindowSize()

    useEffect(()=>{
        setWindowSize(size)
    })
    

    return(
        <Header_Container>
            <>{windowSize! < 1024 &&
            <NavBar/>
            }
            </>
            <>{windowSize! >= 1024 &&
            <DesktopNavBar/>
            }
            </>

        </Header_Container>
    )
}
export default Header;
