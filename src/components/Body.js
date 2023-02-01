
import { useEffect, useState } from "react";
import {RestaurantCard} from './RestaurantCard'; //named import 
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import  useRestaurantList  from '../utils/useRestaurantList'


const Body = () =>{
    const [searchValue,setSearchValue] = useState("");
    const restaurantList = useRestaurantList()
    const [filtedRestaurantList,setFiltedRestaurantList] = useState([])

    useEffect(()=>{
        setFiltedRestaurantList(restaurantList)
    },[restaurantList])

//early return or avoid rendering  
    if(!restaurantList) return null;
//

    return (restaurantList.length === 0)
    ?(<div className="shimmer-main-container">{Array(12).fill('').map((x,index)=><Shimmer key={index}/>)}</div>)
    :(
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
                filtedRestaurantList.length === 0
                ?<h1>No match found </h1>
                :(
                 filtedRestaurantList.map(res=>(<RestaurantCard {...res.data} key={res.data.id}/>))
                )
            }
     </div>
       </>
    )
}


export default Body;