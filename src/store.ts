import { configureStore } from "@reduxjs/toolkit";
import chefsReducer from "./components/redux/chefs/ChefsSlicer";
import restaurantsReducer from "./components/redux/restaurants/RestaurantsSlicer";
import dishesReducer from './components/redux/dishes/DishesSlicer';
import chefReducer from './components/redux/chef/ChefSlicer';
import dishReducer from './components/redux/dish/DishSlicer';
import dishesIDReducer from './components/redux/dishesID/DishesIDSlicer';



export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs: chefsReducer,
        dishes: dishesReducer,
        chef: chefReducer,
        dishesID: dishesIDReducer,
        dishArray: dishReducer,
    },
})

