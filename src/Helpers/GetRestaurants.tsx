import { Restaurant } from "../assests/Types";
import { restaurants_number, restaurants } from "../constants/Restaurants4Chefs";
import { AllRestaurants } from "../assests/Data";



let newRestaurants:Restaurant[] = [];


export const GetRestaurants=()=>{
    let i =0;
    while( i<restaurants_number.length)
    {
        newRestaurants=newRestaurants.concat(AllRestaurants.slice(restaurants_number[i-1],restaurants_number[i]))
        i++;
    };

    return newRestaurants;
}

 