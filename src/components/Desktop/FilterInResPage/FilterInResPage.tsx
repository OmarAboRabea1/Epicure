import React, { useState } from 'react';

import { Container, Filter_bar, UnderlinedSpan, Title, Title_box, Filter_box, Filter_text } from "./styles";
type Props = {
    onChange: (arg1: boolean, arg2: boolean, arg3: boolean) => void;
  }
const FilterInResPage: React.FC<Props> = ({ onChange })=>{
  const [breackfast, setBreakfast] = useState(true)
  const [launch, setLaunch] = useState(false)
  const [dinner, setDinner] = useState(false)

    const handleChange1 = () => {
        setBreakfast(true);
        setLaunch(false);
        setDinner(false);
        onChange(true, false, false);
      }
    
      const handleChange2 = () => {
        setBreakfast(false);
        setLaunch(true);
        setDinner(false);
        onChange(false, true, false);
      }
    
      const handleChange3 = () => {
        setBreakfast(false);
        setLaunch(false);
        setDinner(true);
        onChange(false, false, true);
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
            </Filter_bar>
        </Container>
        
    )
}
export default FilterInResPage;