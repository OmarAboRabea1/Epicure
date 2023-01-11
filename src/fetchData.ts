import { toast } from "react-toastify"
import { getChefUrl } from "./constants/FetchConstants";
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
    const formData = new FormData();
    formData.append('name', param);
    const header = {
        "Accept": "*/*"
    };
    try{
        const fetch_response = await fetch(getChefUrl, { method: 'POST',
        body: formData, headers: header}
        ).then((data) => {
            return data.json();
        });
        const response = await axios.post(getChefUrl, args)
        return fetch_response
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