import { toast } from "react-toastify"
import { getChefUrl, getDishUrl } from "./constants/FetchConstants";
import axios from "axios";


export const fetchRestaurantsData = async () => {
    try{
        const response = await fetch(
            "http://localhost:3001/api/restaurants/getRestaurants"
        ).then((data) => {
            return data.json();
        });
        return response
    }
    catch(error: any){
        toast.error(error.message);
    }
}

export const fetchChefsData = async () => {
    try{
        const response = await fetch(
            "http://localhost:3001/api/chefs/getChefs"
        ).then((data) => {
            return data.json();
        });
        return response
    }
    catch(error: any){
        toast.error(error.message);
    }
}

export const getChef = async(param: string) => {
    const args = {
        name: param
    };
    try{
        const response = await axios.post(getChefUrl, args)
        return response.data
    } 
    catch(error: any){
        toast.error(error.message);
    }
    
}

export const fetchDishesData = async () => {
    try{
        const response = await fetch(
            "http://localhost:3001/api/dishes/getDishes"
        ).then((data) => {
            return data.json();
        });
        return response
    }
    catch(error: any){
        toast.error(error.message);
    }
}

export const getDishesByID = async(param: number[]) => {
    var data: any = []
    param.forEach(async element => {
        const args = {
            name: element
        };
        try{
            const response = await axios.post(getDishUrl, args)
            data.concat(response.data)
        } 
        catch(error: any){
            toast.error(error.message);
        }
    });
    return data
}