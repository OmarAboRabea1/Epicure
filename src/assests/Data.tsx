import { Chef, Dish, Restaurant } from "./Types";
import restaurantPic from "../assests/Claro_Res.svg";
import chefIMG from "../assests/yossi.svg";
import spicy from "../assests/spicy.svg"
import vegan from "../assests/vegan.svg";
import vegetarian from "../assests/vegetarian.svg";
import { PrepareSearchData } from "../Helpers/PrepareSearchData";

export interface SearchNames{
    name: string;
}





export const AllRestaurants: Array<Restaurant> = [
    
]

export const AllDishes: Array<Dish> = [
    {
        name:"Dish1",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "breakfast",
    },
    {
        name:"Dish2",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "launch",
    },
    {
        name:"Dish3",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "dinner",
    },
    {
        name:"Dish4",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "breakfast",
    },
    {
        name:"Dish5",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "breakfast",
    },
    {
        name:"Dish6",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "dinner",
    },
    {
        name:"Dish7",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "launch",
    },

]
export const AllChefs: Array<Chef> = [
    
]

export const Colors = {
    black: "#000",
    grey: "#979797",
    lightYellow: "#F9F4EA",
    yellow: "#E19D1A",
    lightGrey: "#FAFAFA"
}

export var search_names: string[]= []

search_names = PrepareSearchData(AllRestaurants, AllDishes, AllChefs)
