import Header from "../../components/Header/Header";
import { useState } from 'react';

import { Container, Title, Title_box } from "./styles";
import FilterBar from "../../components/FilterBar/FilterBar";
import AllRes from "./AllRes";
import NewRes from "./NewRes";
import MostRes from "./MostRes";
import OpenRes from "./OpenRes";

const Restaurants=()=>{
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
            <Title_box>
                <Title>Restaurants</Title>
            </Title_box>
            <FilterBar onChange={handleChange}/>
            {
                allRes && !newRes && !mostRes && !openRes &&
                <>
                <AllRes/>
                </>
            }
                        {
                !allRes && newRes && !mostRes && !openRes &&
                <>
                <NewRes/>
                </>
            }            {
                !allRes && !newRes && mostRes && !openRes &&
                <>
                <MostRes/>
                </>
            }            {
                !allRes && !newRes && !mostRes && openRes &&
                <>
                <OpenRes/>
                </>
            }
        </Container>
        
    )
}
export default Restaurants;