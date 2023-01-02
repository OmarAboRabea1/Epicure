import { AboutUs } from "../../components/AboutUs/AboutUs"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { PopularRes } from "../../components/PopularRes/PopularRes"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { SignatureFilter } from "../../components/Signature/SignatureFilter"
import { SignatureDish } from "../../components/SignatureDish/SignatureDish"
import { WeekChef } from "../../components/WeekChef/WeekChef"
import { Container } from "./styles"
import { useEffect, useState } from "react";
import { DesktopSearchBar } from "../../components/Desktop/DesktopSearchBar/SearchBar"
import  SetWindowSize  from "../../Helpers/SetWindowSize"
import { DesktopPopularRes } from "../../components/Desktop/DesktopPopularRes/PopularRes"
import { DesktopSignatureDish } from "../../components/Desktop/DesktopSignatureDish/SignatureDish"
import { DesktopSignatureFilter } from "../../components/Desktop/DesktopSignature/SignatureFilter"
import { DesktopWeekChef } from "../../components/Desktop/DesktopWeekChef/WeekChef"
import { DesktopAboutUs } from "../../components/Desktop/DesktopAboutUs/AboutUs"
import DesktopFooter from "../../components/Desktop/DesktopFooter/Footer"


const HomePage=()=>{
    const [windowSize, setWindowSize] = useState<Number>()
    var size = SetWindowSize()

    useEffect(()=>{
        setWindowSize(size)
        console.log(size)
    })
    return(
        <Container>
            <Header/>
            {windowSize! < 1024 &&
                <>
                <SearchBar/>
                <PopularRes/>
                <SignatureDish/>
                <SignatureFilter/>
                <WeekChef/>
                <AboutUs/>
                <Footer/>
                </>
            }
            
            {windowSize! >= 1024 &&
                <>
                <DesktopSearchBar/>
                <DesktopPopularRes/>
                <DesktopSignatureDish/>
                <DesktopSignatureFilter/>
                <DesktopWeekChef/>
                <DesktopAboutUs/>
                <DesktopFooter/>
                </>
            }
            
           
        </Container>


    )
}
export default HomePage