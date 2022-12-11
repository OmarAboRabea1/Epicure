import { AllChefs } from "../assests/Data";
import { Restaurant } from "../assests/Types";


export const chef_const = AllChefs[0];
export const restaurants_number = chef_const.restaurants;
export let restaurants:Restaurant[] = [];