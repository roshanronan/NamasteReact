import { useState,useEffect } from "react";
import { FETCH_RESTAURANT_MENU } from "../constant";


const useRestaurant =(id)=>{
    const [restaurantMenu,setRestaurantMenu] = useState('')

    useEffect(()=>{
        getRestaurantMenu()
    }
    ,[])

    async function getRestaurantMenu(){
       try{
        let data = await fetch(FETCH_RESTAURANT_MENU+id);
        let json = await data.json()
        // console.log("json",json)
        setRestaurantMenu(json?.data)
       }catch(e){
        console.log(e)
       }
    }

    return restaurantMenu
}

export default useRestaurant