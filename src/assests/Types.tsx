export interface Restaurant{
    name:string;
    chef:string;
    dishes:number[];
    openedAt:Array<string>;
    establishedAt: String,
    img:string;
    _id:number;
}

export interface Dish{
    name:string;
    restaurant:string;
    describtion:string;
    img:string;
    price:number;
    ingredients:string[];
    category: string,
    dishType:string;
}

export interface Chef{
    _id:number;
    name:string;
    age: number;
    restaurants:number[];
    describtion:string;
    img:string;
}

