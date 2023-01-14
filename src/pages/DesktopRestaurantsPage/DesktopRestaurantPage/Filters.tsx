import React, { useState } from 'react';

import { Arrow, Box_for_arrow, Box_for_text, Container, DesktopContainer, Filter_bar, Filter_box, Filter_text } from "./styles";
type Props = {
    onChange: (arg1: boolean, arg2: boolean, arg3: boolean) => void;
  }
const Filter= ()=>{
  const [range, setRange] = useState(false)
  const [distance, setDistance] = useState(false)
  const [rating, setRating] = useState(false)

    const handleChange1 = () => {
      if(range){
        setRange(false);
      }
      else{
        setRange(true);
      }
        setDistance(false);
        setRating(false);
      }
    
      const handleChange2 = () => {
        if(distance){
          setDistance(false);
        }
        else{
          setDistance(true);
        }
        setRange(false);
        setRating(false);
      }
    
      const handleChange3 = () => {
        if(rating){
          setRating(false);
        }
        else{
          setRating(true);
        }
        setRange(false);
        setDistance(false);
      }


    return(
        <Container>
          <DesktopContainer>
            <Filter_bar>
                <Filter_box underline= {range} onClick={handleChange1}>
                  <Box_for_text>
                    <Filter_text underline={range}>Price Range</Filter_text>
                  </Box_for_text>
                    <Box_for_arrow>
                      <Arrow/>
                    </Box_for_arrow>
                </Filter_box>
                <Filter_box underline= {distance} onClick={handleChange2}>
                  <Box_for_text>
                    <Filter_text underline={distance}>Distance</Filter_text>
                  </Box_for_text>
                    <Box_for_arrow>
                      <Arrow/>
                    </Box_for_arrow>
                </Filter_box>
                <Filter_box underline= {rating} onClick={handleChange3}>
                  <Box_for_text>
                    <Filter_text underline={rating}>Rating</Filter_text>
                  </Box_for_text>
                    <Box_for_arrow>
                      <Arrow/>
                    </Box_for_arrow>
                </Filter_box>
            </Filter_bar>
          </DesktopContainer>
        </Container>
        
    )
}
export default Filter;