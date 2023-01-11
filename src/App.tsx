import React, { useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './services/Routing';
import { useDispatch } from 'react-redux';
import { setRestaurants } from "./components/redux/restaurants/RestaurantsSlicer";
import { fetchChefsData, fetchDishesData, fetchRestaurantsData, getChef } from './fetchData';
import { setChefs } from './components/redux/chefs/ChefsSlicer';
import { setDishes } from './components/redux/dishes/DishesSlicer';
import { setChef } from './components/redux/chef/ChefSlicer';



function App() {

  const dispatch = useDispatch();
  const fetchRestaurants = useCallback(async () => {
    const restaurants = await fetchRestaurantsData();
    if(restaurants){
      dispatch(setRestaurants(restaurants))
    }
  }, []);
  const fetchChefs = useCallback(async () => {
    const chefs = await fetchChefsData();
    if(chefs){
      dispatch(setChefs(chefs))
    }
  }, []);

  const fetchDishes = useCallback(async () => {
    const dishes = await fetchDishesData();
    if(dishes){
      dispatch(setDishes(dishes))
    }
  }, []);

  const fetchChef= useCallback(async () => {
    const chef = await getChef("Gordon Ramsay");
    if(chef){
      dispatch(setChef(chef))
    }
  }, []);




  useEffect(() => {
    fetchRestaurants();
    fetchChefs();
    fetchDishes();
    fetchChef();
  }, [fetchRestaurants, fetchChefs, fetchDishes, getChef])



  return (
    <Routing/>
  )
};

export default App;
