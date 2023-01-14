import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SetWindowSize from "../Helpers/SetWindowSize";
import Chefs from "../pages/ChefsPage/Chefs";
import DesktopRestaurantPage from "../pages/DesktopRestaurantsPage/DesktopRestaurantPage/Restaurant";
import DesktopRestaurants from "../pages/DesktopRestaurantsPage/DesktopRestaurants";
import HomePage from "../pages/HomePage/HomePage";
import RestaurantPage from "../pages/RestaurantsPage/RestaurantPage/Restaurant";
import Restaurants from "../pages/RestaurantsPage/Restaurants";



const Routing=()=>{
    const [windowSize, setWindowSize] = useState<Number>()
    var size = SetWindowSize()

    useEffect(()=>{
        setWindowSize(size)
    })
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                <Route index element={<HomePage />} />
                <Route path="Chefs" element={<Chefs />} />
                {windowSize! < 1024 &&
                <>
                    <Route path="Restaurants" element={<Restaurants />} />
                    <Route path="Restaurants/:restaurant_id" element={<RestaurantPage />} />
                </>

                }
                {windowSize! >= 1024 &&
                <>
                    <Route path="Restaurants" element={<DesktopRestaurants />} />
                    <Route path="Restaurants/:restaurant_id" element={<DesktopRestaurantPage />} />
                </>
                }

                </Route>
            </Routes>
            </BrowserRouter>
    )
    
}
export default Routing;


