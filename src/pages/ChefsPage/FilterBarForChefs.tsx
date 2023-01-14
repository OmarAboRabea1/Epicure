import React, { useState } from 'react';

import { Container, Filter_bar, Filter_box, Filter_text } from "./styles";
type Props = {
    onChange: (arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean) => void;
  }
const FilterBarForChefs: React.FC<Props> = ({ onChange })=>{
    const [allRes, setAllRes] = useState<boolean>(true)
    const [newRes, setNewRes] = useState<boolean>(false)
    const [mostRes, setMostRes] = useState<boolean>(false)
    const [openRes, setOpenRes] = useState<boolean>(false)
    const [mapView, setMapView] = useState<boolean>(false)


    const handleChange1 = () => {
        setAllRes(true);
        setNewRes(false);
        setMostRes(false);
        setOpenRes(false);
        setMapView(false);
        onChange(true, false, false, false, false);
      }
    
      const handleChange2 = () => {
        setAllRes(false);
        setNewRes(true);
        setMostRes(false);
        setOpenRes(false); 
        setMapView(false);       
        onChange(false, true, false, false, false);
      }
    
      const handleChange3 = () => {
        setAllRes(false);
        setNewRes(false);
        setMostRes(true);
        setOpenRes(false); 
        setMapView(false);       
        onChange(false, false, true, false, false);
      }
    
      const handleChange4 = () => {
        setAllRes(false);
        setNewRes(false);
        setMostRes(false);
        setOpenRes(true);
        setMapView(false);        
        onChange(false, false, false, true, false);
      }
      const handleChange5 = () => {
        setAllRes(false);
        setNewRes(false);
        setMostRes(false);
        setOpenRes(false);
        setMapView(true);        
        onChange(false, false, false, false, true);
      }

    return(
        <Container>
            <Filter_bar>
                <Filter_box>
                    <Filter_text underline={allRes} onClick={handleChange1}>All</Filter_text>
                </Filter_box>
                <Filter_box>
                    <Filter_text underline={newRes} onClick={handleChange2}>New</Filter_text>
                </Filter_box>
                <Filter_box>
                    <Filter_text underline={mostRes} onClick={handleChange3}>Most Popular</Filter_text>
                </Filter_box>
            </Filter_bar>
        </Container>
        
    )
}
export default FilterBarForChefs;