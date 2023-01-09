export interface Restaurant{
    name:string;
    chef:string;
    dishes:number[];
    openedAt:Array<string>;
    establishedAt: String,
    img:string;
}

export interface Dish{
    name:string;
    price:number;
    ingredients:string[];
    category: string,
    dishType:string;
    picture:string;
}

export interface Chef{
    name:string;
    description:string;
    restaurants:number[];
    picture:string;
}

