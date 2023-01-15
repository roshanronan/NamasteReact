import {RESTAURANT_LIST} from "../constant";//name import
import { useEffect, useState } from "react";
import {RestaurantCard} from './RestaurantCard'; //named import 


const filterData=(restaurantList,serachText)=>{
    return restaurantList.filter(restaurant=>restaurant.data.name.includes(serachText))
}

const Body = () =>{
    const [searchValue,setSearchValue] = useState("");
    const [restaurantList,setRestaurantList] = useState([]);
    const [filtedRestaurantList,setFiltedRestaurantList] = useState([])

    useEffect(()=>{
        getData()
        console.log('useeffedr')
        // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6157801&lng=77.40994970000001&page_type=DESKTOP_WEB_LISTING
    },[])

    async function getData(){
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6157801&lng=77.40994970000001&page_type=DESKTOP_WEB_LISTING")
        let json = await data.json()
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        setFiltedRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        console.log(json)
    }
console.log('render')
    return(
       <>
       <div className="searchBar">
            <input name="searchBar" value={searchValue} placeholder="Serach" onChange={(e)=>{
                setSearchValue(e.target.value)
            }} />
            <button onClick={()=>{
               let data = filterData(restaurantList,searchValue)
               setFiltedRestaurantList(data)
            }}>Search</button>

       </div>
       <div className="restaurant-list">
       {
        filtedRestaurantList.map(res=>(<RestaurantCard {...res.data} key={res.data.id}/>))
       } 
     </div>
       </>
    )
}


export default Body;