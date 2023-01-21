
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constant";
import Shimmer from "./Shimmer";



const RestaurantMenu = () =>{

    const {id} = useParams()
    const [restaurantMenu,setRestaurantMenu]= useState(null)
    // const {name,area,avgRating,city,cloudinaryImageId,costForTwoMsg,menu} = restaurantMenu
    useEffect(()=>{
        getRestaurantMenu()
    }
    ,[])

    async function getRestaurantMenu(){
       try{
        let data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=28.3965979&lng=77.034108&menuId="+id);
        let json = await data.json()
        // console.log("json",json)
        setRestaurantMenu(json?.data)
       }catch(e){
        console.log(e)
       }
    }

    return (!restaurantMenu)?<Shimmer/> :(
       <div className="restaurant-menu">
       <div>
       <h2>{restaurantMenu.name}</h2>
       <img src={IMG_CDN_LINK+restaurantMenu.cloudinaryImageId} alt={restaurantMenu.name}/>
       <h3>{restaurantMenu.area}</h3>
       <h3>{restaurantMenu.city}</h3>
       <h3>{restaurantMenu.avgRating}</h3>
       <h3>{restaurantMenu.costForTwoMsg}</h3>
       </div>

      <div>
        <h2>Menu</h2>
        {Object.values(restaurantMenu.menu.items).map(item =><h5 key={item.id}>{item.name}</h5>)}
      </div>
       </div>
    )
}

export default RestaurantMenu;