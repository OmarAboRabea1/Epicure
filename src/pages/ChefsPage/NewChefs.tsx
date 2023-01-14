
import { AllRestaurants } from "../../assests/Data";
import  ResCard  from "../../components/PopularRes/ResCard";
import uniqid from "uniqid";

import { Container, UnderlinedSpan, Title, Title_box, Cards_container, ResLink, DesktopContainer } from "./styles";
import { Chef, Restaurant } from "../../assests/Types";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChefCard } from "./ChefCard";

const restaurants = AllRestaurants;
const filter_res=(chefs:Chef[]) => {
    var newChefs: Array<Chef> = [] 
    chefs.map((item:Chef) => {
        if(Number(item.age) < 50){
            newChefs = newChefs.concat([] ,item)
        }
    });
    return newChefs
}

const NewChefs=()=>{

    const all_chefs = useSelector((state: any) => state.chefs.value)
    const [filteredChefs, setFilteredChefs] = useState<Array<Chef>>([])

    useEffect(()=>{
        const filteredChefs = filter_res(all_chefs);
        setFilteredChefs(filteredChefs)
    },[])

    
    return(
        <>
        {filteredChefs.length > 0 && 
            <DesktopContainer>
                <Cards_container>
                    {
                        filteredChefs.map((item:Chef, key: number) => (

                            <ChefCard chef= {item} key={key}/>
                        ))
                    }
                </Cards_container>
            </DesktopContainer>
        }
        </>
        
    )
}
export default NewChefs;