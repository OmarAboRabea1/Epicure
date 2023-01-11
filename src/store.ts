import { useDispatch, useSelector } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import chefsReducer from "./components/redux/chefs/ChefsSlicer";
import restaurantsReducer from "./components/redux/restaurants/RestaurantsSlicer";
import dishesReducer from './components/redux/dishes/DishesSlicer';
import chefReducer from './components/redux/chef/ChefSlicer';

export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs: chefsReducer,
        dishes: dishesReducer,
        chef: chefReducer,
    },
})

