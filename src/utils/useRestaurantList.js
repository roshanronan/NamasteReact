import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_LIST } from "../constant";

const useRestaurantList = () =>{
    const [restaurantList,setRestaurantList] = useState([])

    useEffect(()=>{
        getData()
    },[])

    async function getData(){
        try{
            let data = await fetch(FETCH_RESTAURANT_LIST)
        let json = await data.json()
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        
        }catch(e){
            console.log('fsyd',e)
        }
    }

    return restaurantList
}

export default useRestaurantList