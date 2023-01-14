import {useParams} from "react-router-dom"; 
import { Container, Cards_container, ResImg, Res_container, Title, Secondary_title, Description, Box, ResImg_box, ClockImg, Empty_text, Empty_Box } from "../styles";
import Header from "../../../components/Header/Header";
import { AllDishes, AllRestaurants } from "../../../assests/Data";
import { Chef, Dish, Restaurant } from "../../../assests/Types";
import { useSelector } from "react-redux";
import filter from 'lodash/filter';
import { useEffect, useState } from "react";
import CardsDisplay from "./CardsDisplay";
import Footer from "../../../components/Footer/Footer";

const ChefPage=()=>{
const chef_name = useParams()["chef_id"]
const chefs = useSelector((state: any) => state.chefs.value)
const all_restaurants = useSelector((state: any) => state.restaurants.value)
const [choosedRes, setRes] = useState<Restaurant[]>([])


useEffect(()=>{
    choose_restaurants();    
},[all_restaurants])

const choose_restaurants=()=>{
    const restaurants: Restaurant[] = filter(all_restaurants, obj => chef_name!.includes(obj.chef));
    setRes(restaurants)
}

    return(
        <>
        {chefs.length > 0 && 

        <Container>
            <Header/>
            <Res_container>
            {
                    chefs.map((item:Chef, key:number) => (
                        item.name == chef_name &&
                        <>
                        <ResImg_box>
                            <ResImg src={item.img} key={key}/>
                        </ResImg_box>
                        <Description>
                            <Title>{item.name}</Title>
                            <Empty_Box>
                                <Empty_text>{item.describtion}</Empty_text>
                            </Empty_Box>
                        </Description>
                        <CardsDisplay restaurants={choosedRes}/>
                        </>

                    ))
                }

            </Res_container>  
            <Footer/>      
        </Container>
        }
        </>
    )
}
export default ChefPage;