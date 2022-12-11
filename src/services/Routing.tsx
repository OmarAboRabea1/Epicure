import { BrowserRouter, Routes, Route} from "react-router-dom";
import Chefs from "../pages/ChefsPage/Chefs";
import HomePage from "../pages/HomePage/HomePage";
import Restaurants from "../pages/RestaurantsPage/Restaurants";



const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                <Route index element={<HomePage />} />
                <Route path="Chefs" element={<Chefs />} />
                <Route path="Restaurants" element={<Restaurants />} />
                </Route>
            </Routes>
            </BrowserRouter>
    )
    
}
export default Routing;


