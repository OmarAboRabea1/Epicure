import { AboutUs } from "../../components/AboutUs/AboutUs"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { PopularRes } from "../../components/PopularRes/PopularRes"
import { AllRes_box } from "../../components/PopularRes/styles"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { SignatureFilter } from "../../components/Signature/SignatureFilter"
import { SignatureDish } from "../../components/SignatureDish/SignatureDish"
import { WeekChef } from "../../components/WeekChef/WeekChef"
import { Container, Container2 } from "./styles"
import React ,{ useEffect, useState } from "react";
import { DesktopSearchBar } from "../../components/Desktop/DesktopSearchBar/SearchBar"


const HomePage=()=>{
    const [windowSize, setWindowSize] = useState<Number>()
    useEffect(()=>{
        setWindowSize(window.innerWidth)
        console.log(windowSize)
    })
    return(
        <Container>
            <Header/>
            <>{windowSize! < 1024 &&
                <SearchBar/>
            }
            </>
            <>{windowSize! >= 1024 &&
            <DesktopSearchBar/>
            }
            </>
            <PopularRes/>
            <SignatureDish/>
            <SignatureFilter/>
            <WeekChef/>
            <AboutUs/>
            <Footer/>
        </Container>


    )
}
export default HomePage