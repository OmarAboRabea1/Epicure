import { useState } from "react";
import { AllChefs, AllDishes, AllRestaurants, search_names } from "../../assests/Data"
import { Search_active, Search_box, Search_input, On_search_img, Search_result_newContainer, Link_to } from "./styles";
import { Search_result_table, Search_result_container, Search_text_p } from "../SearchBar/styles"
import { Chef, Dish, Restaurant } from "../../assests/Types";
import { useSelector } from "react-redux";

interface props{
    menu : boolean
}
export const SearchMenuActive =(funcProops: props)=>{

    const [search, setSearch] = useState('');

    const all_retaurants = useSelector((state: any) => state.restaurants.value)
    const all_chefs = useSelector((state: any) => state.chefs.value)
    const all_dishes = useSelector((state: any) => state.dishes.value)

    const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };
    
      var data = {
        nodes: all_retaurants.filter((item: Restaurant) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
      var results2 = {
        nodes: all_dishes.filter((item: Dish) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
      };
      var results3 = {
        nodes: all_chefs.filter((item: Chef) =>
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
                {data.nodes.map((item: { name: string })=>{
                    let url = `/Restaurants/${item.name}` 
                    return <Link_to href= {url}>{item.name}</Link_to>
                })}
                </>
                {results2.nodes.length>0 &&
                <Search_text_p>Dishes:</Search_text_p>
                }
                <>
                {results2.nodes.map((item: { name: string })=>{
                    let url = `/Restaurants/${item.name}` 
                    return <Link_to href={url}>{item.name}</Link_to> 
                })}
                </>
                {results3.nodes.length>0 &&
                <Search_text_p>Chefs:</Search_text_p>
                }                   
                <>
                {results3.nodes.map((item: { name: string })=>{
                    let url = `/Chefs/${item.name}` 
                    return <Link_to href={url}>{item.name}</Link_to>
                })}
                </>
                </Search_result_table>
            </Search_result_newContainer>
            }
        </Search_box>
    </Search_active>
    )

}