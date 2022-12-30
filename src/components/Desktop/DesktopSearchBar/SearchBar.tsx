import { useState, useEffect } from "react";
import { AllChefs, AllDishes, AllRestaurants, search_names } from "../../../assests/Data"
import { Search_Container, Hero_box, SearchBar_box, Search_box, Search_input, Search_text_h1, On_search_img, Search_text_box, Search_result_table, Search_result_container, Search_text_p } from "./styles"



export const DesktopSearchBar = ()=>{
  const [windowSize, setWindowSize] = useState<Number>()
  useEffect(()=>{
      setWindowSize(window.innerWidth)
      console.log(windowSize)
  })
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
        <Search_Container>
            <Hero_box>
                <SearchBar_box>
                  <Search_text_box>
                    <Search_text_h1>Epicure works with the top chef restaurants in Tel Aviv</Search_text_h1>
                  </Search_text_box>
                    <Search_box>
                        <On_search_img/>
                        <Search_input placeholder="Search for restaurant cuisine, chef" onChange={handleSearch}/>
                    </Search_box>
                </SearchBar_box>
                {
                    search.length > 0 && (data.nodes.length> 0 || results2.nodes.length> 0 || results3.nodes.length> 0) &&
                <Search_result_container>
                    
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
                </Search_result_container>
                }
            </Hero_box>

        </Search_Container>
    )
}