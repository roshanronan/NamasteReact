
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constant";
import Shimmer from "./Shimmer";
import FoodCard from "./FoodCard";
import useRestaurant from "../utils/useRestaurant";



const RestaurantMenu = () =>{

    const {id} = useParams()
    const restaurantMenu = useRestaurant(id) 

    return (!restaurantMenu)?<Shimmer/> :(
       <div className="flex flex-col bg-pink-100">
       <div className="flex bg-black text-white rounded-md m-2 ">
       <img className="p-8 object-cover rounded " src={IMG_CDN_LINK+restaurantMenu.cloudinaryImageId} alt={restaurantMenu.name}/>
        <div className="flex flex-col p-8">
        <h2 className="text-xl">{restaurantMenu.name}</h2>
       
       <h3>{restaurantMenu.area}</h3>
       <h3>{restaurantMenu.city}</h3>
       <h3>{restaurantMenu.avgRating}</h3>
       <h3>{restaurantMenu.costForTwoMsg}</h3>
        </div>
       </div>

      <div className="flex flex-col p-8">
        <h2 className="text-xl my-3">Menu</h2>
        <div className="flex flex-wrap justify-center">
        {Object.values(restaurantMenu.menu.items).map(item =><FoodCard className="w-52" key={item.id} item={item}/>)}
        </div>
      </div>
       </div>
    )
}

export default RestaurantMenu;