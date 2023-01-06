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
    {
        name: "Restaurant1",
        owner: "Chef1",
        dishesID: [1, 5, 6, 7],
        openedAt: ["10:00","22:00"],
        establishedAt: "2009",
        picture: restaurantPic
    },
    {
        name: "Restaurant2",
        owner: "Chef2",
        dishesID: [1, 3, 7],
        openedAt: ["10:00","14:00"],
        establishedAt: "2015",
        picture: restaurantPic
    },
    {
        name: "Restaurant3",
        owner: "Chef1",
        dishesID: [2, 3, 4],
        openedAt: ["10:00","14:00"],
        establishedAt: "2005",
        picture: restaurantPic
    },
    {
        name: "Restaurant4",
        owner: "Chef1",
        dishesID: [4, 5, 6, 7],
        openedAt: ["14:00","22:00"],
        establishedAt: "2023",
        picture: restaurantPic
        
    },
    {
        name: "Restaurant5",
        owner: "Chef1",
        dishesID: [1, 2, 3, 5],
        openedAt: ["14:00","22:00"],
        establishedAt: "2020",
        picture: restaurantPic
    }
]

export const AllDishes: Array<Dish> = [
    {
        name: "Dish1",
        ingredients: ["salt", "something-else", "paper", "sugar", "milk"],
        picture: restaurantPic,
        dishType: spicy,
        price: 88
    },
    {
        name: "Dish2",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        dishType: vegan,
        price: 24
    },
    {
        name: "Dish3",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        dishType: vegetarian,
        price: 56
    },
    {
        name: "Dish4",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        dishType: spicy,
        price: 67
    },
    {
        name: "Dish5",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        dishType: spicy,
        price: 50
    },
    {
        name: "Dish6",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        dishType: vegan,
        price: 49
    },
    {
        name: "Dish7",
        ingredients: ["salt", "something-else"],
        picture: restaurantPic,
        dishType: spicy,
        price: 35
    },

]
export const AllChefs: Array<Chef> = [
    {
        name: "Yossi Shitrit",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [1, 2, 3],
        picture: chefIMG,
    },
    {
        name: "Chef2",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [3, 4, 5],
        picture: chefIMG,
    },
    {
        name: "Chef3",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [2, 3, 4],
        picture: chefIMG,
    },
    {
        name: "Chef4",
        description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
        restaurants: [1, 2, 4],
        picture: chefIMG,
    },


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
