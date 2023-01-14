import styled from "styled-components"
import heroSearch from "../../../assests/hero-picture-search.svg";
import search_img from "../../../assests/search_img.svg";


export const Search_Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
`

export const Hero_box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 696px;
    background:url(${heroSearch});
    background-position: center;
    background-size: 100vmax;
    background-repeat: no-repeat;
`   

export const SearchBar_box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    gap: 18px;
    width: 52%;
    height: 30%;
    background: rgba(255, 255, 255, 0.88);

`

export const Search_box = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 70%;
    height: 30px;
    border: 0.5px solid #000000;
    border-radius: 4px;


`

export const Search_input = styled.input`
    width: 100%;
    height: 83%;  
    padding: 10px 11.5px; 
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1.29px;
    border: 0ch;
    background: none;
    color: #000000;
    outline: none;


`
export const On_search_img = styled.div`

    background-image: url(${search_img});
    background-repeat: no-repeat;
    width: 25px;
    height: 20px;
    margin-left: 12px;
`


export const Search_text_box = styled.div`
    width: 60%;
    height: 40%;

`


export const Search_text_h1 = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

`



export const Search_result_container = styled.div`
    width: 90%;
    height: 150px;
    position: absolute;
    top: 210px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    background: rgba(255, 255, 255, 0.95);


`
export const Search_result_table = styled.div`
    width: 80%;
    height: fit-content;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;


`

export const Search_result_text = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

`
export const nothing = styled.div`
    display: none;
`


export const Search_text_p = styled.h1`

    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 1.97px;
    margin: 0%;
    color: #000000;

`

export const Search_containerSec = styled.div`
    width: 100%;
    height: 100%;


`