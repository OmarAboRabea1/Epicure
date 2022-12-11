import { useState } from "react";
import { AllChefs, AllDishes, AllRestaurants, search_names } from "../../assests/Data"
import { Search_active, Search_box, Search_input, On_search_img, Search_result_newContainer } from "./styles";
import { Search_result_table, Search_result_container, Search_text_p } from "../SearchBar/styles"

interface props{
    menu : boolean
}
export const SearchMenuActive =(funcProops: props)=>{
    const [search, setSearch] = useState('');

    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };
    
      var data = {
        nodes: AllRestaurants.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
      var results2 = {
        nodes: AllDishes.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
      var results3 = {
        nodes: AllChefs.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
    return(

        <Search_active active = {funcProops.menu}>
        <Search_box>
            <On_search_img/>
            <Search_input placeholder="Search for restaurant cuisine, chef" onChange={handleSearch}/>
            {
                    search.length > 0 && (data.nodes.length> 0 || results2.nodes.length> 0 || results3.nodes.length> 0) &&
                <Search_result_newContainer>
                    
                    <Search_result_table>
                    {data.nodes.length>0 &&
                    <Search_text_p>Restaurants:</Search_text_p>
                    }
                    <>
                    {data.nodes.map(item=>{
                        return <a href="#">{item.name}</a>
                    })}
                    </>
                    {results2.nodes.length>0 &&
                    <Search_text_p>Dishes:</Search_text_p>
                    }
                    <>
                    {results2.nodes.map(item=>{
                        return <a href="#">{item.name}</a> 
                    })}
                    </>
                    {results3.nodes.length>0 &&
                    <Search_text_p>Chefs:</Search_text_p>
                    }                   
                    <>
                    {results3.nodes.map(item=>{
                        return <a href="#">{item.name}</a>
                    })}
                    </>
                    </Search_result_table>
                </Search_result_newContainer>
                }
        </Search_box>
    </Search_active>
    )

}