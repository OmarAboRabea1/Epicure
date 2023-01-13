import React, { useState } from 'react';

import { Container, Filter_bar, UnderlinedSpan, Title, Title_box, Filter_box, Filter_text } from "./styles";
type Props = {
    onChange: (arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean) => void;
  }
const FilterInResPage: React.FC<Props> = ({ onChange })=>{
  const [breackfast, setBreakfast] = useState(true)
  const [launch, setLaunch] = useState(false)
  const [dinner, setDinner] = useState(false)
  const [dessert, setDessert] = useState(false)


    const handleChange1 = () => {
        setBreakfast(true);
        setLaunch(false);
        setDinner(false);
        setDessert(false)
        onChange(true, false, false, false);
      }
    
      const handleChange2 = () => {
        setBreakfast(false);
        setLaunch(true);
        setDinner(false);
        setDessert(false)
        onChange(false, true, false, false);
      }
    
      const handleChange3 = () => {
        setBreakfast(false);
        setLaunch(false);
        setDinner(true);
        setDessert(false)
        onChange(false, false, true, false);
      }
      const handleChange4 = () => {
        setBreakfast(false);
        setLaunch(false);
        setDinner(false);
        setDessert(true);
        onChange(false, false, false, true);
      }


    return(
        <Container>
            <Filter_bar>
                <Filter_box>
                    <Filter_text underline={breackfast} onClick={handleChange1}>Breakfast</Filter_text>
                </Filter_box>
                <Filter_box>
                    <Filter_text underline={launch} onClick={handleChange2}>Launch</Filter_text>
                </Filter_box>
                <Filter_box>
                    <Filter_text underline={dinner} onClick={handleChange3}>Dinner</Filter_text>
                </Filter_box>
                <Filter_box>
                    <Filter_text underline={dessert} onClick={handleChange4}>Dessert</Filter_text>
                </Filter_box>
            </Filter_bar>
        </Container>
        
    )
}
export default FilterInResPage;