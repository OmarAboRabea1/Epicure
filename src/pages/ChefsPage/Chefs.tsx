import Header from "../../components/Header/Header";
import { useState } from 'react';

import { Container, Title, Title_box } from "./styles";
import AllChefs from "./AllChefs";
import NewChefs from "./NewChefs";
import MostChefs from "./MostChefs";
import FilterBarForChefs from "../DesktopChefsPage/FilterBarForChefs";
import Footer from "../../components/Footer/Footer";

const Chefs=()=>{
    const [allRes, setAllRes] = useState(true)
    const [newRes, setNewRes] = useState(false)
    const [mostRes, setMostRes] = useState(false)
    const [openRes, setOpenRes] = useState(false)
    
    const handleChange = (arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean) => {
        setAllRes(arg1);
        setNewRes(arg2);
        setMostRes(arg3);
        setOpenRes(arg4);
      };
    

    return(
        <Container>
            <Header/>

            <FilterBarForChefs onChange={handleChange}/>
            {
                allRes && !newRes && !mostRes && !openRes &&
                <>
                <AllChefs/>
                </>
            }
            {
                !allRes && newRes && !mostRes && !openRes &&
                <>
                <NewChefs/>
                </>
            }            
            {
                !allRes && !newRes && mostRes && !openRes &&
                <>
                <MostChefs/>
                </>
            }            
            <Footer/>      

        </Container>
        
    )
}
export default Chefs;