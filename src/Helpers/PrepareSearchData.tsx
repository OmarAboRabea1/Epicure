import { SearchNames, search_names } from "../assests/Data"
import { Chef, Dish, Restaurant } from "../assests/Types"

// export interface prepareSearchDataProps{
//     [restaurants:Restaurant[], dishes:Dish[], chefs: Chef[]]
// }

export const PrepareSearchData =(restaurants:Array<Restaurant>, dishes:Array<Dish>, chefs: Array<Chef>)=>{
    var searchData: string[] = [];
        var len = restaurants.length; 
        for(let j=0; j<len; j++)
        {
            searchData.push(restaurants[j].name)
        }
        len = dishes.length; 
        for(let j=0; j<len; j++)
        {
            searchData.push(dishes[j].name)
        }
        len = chefs.length; 
        for(let j=0; j<len; j++)
        {
            searchData.push(chefs[j].name)
        }
    return(searchData)
}