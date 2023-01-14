import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SetWindowSize from "../Helpers/SetWindowSize";
import ChefPage from "../pages/ChefsPage/ChefPage/ChefPage";
import Chefs from "../pages/ChefsPage/Chefs";
import DesktopChefPage from "../pages/DesktopChefsPage/DesktopChefPage/DesktopChefPage";
import DesktopChefs from "../pages/DesktopChefsPage/DesktopChefs";
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
                {windowSize! < 1024 &&
                <>
                    <Route path="Chefs" element={<Chefs />} />
                    <Route path="Chefs/:chef_id" element={<ChefPage />} />

                </>

                }
                {windowSize! >= 1024 &&
                <>
                    <Route path="Chefs" element={<DesktopChefs />} />
                    <Route path="Chefs/:chef_id" element={<DesktopChefPage />} />

                </>
                
                }

                </Route>
            </Routes>
            </BrowserRouter>
    )
    
}
export default Routing;


