
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";



const RestaurantMenu = () =>{

    const {id} = useParams()
    const restaurantMenu = useRestaurant(id) 

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