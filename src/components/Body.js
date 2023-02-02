
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
    ?(<div className=" flex flex-wrap justify-start">{Array(12).fill('').map((x,index)=><Shimmer key={index}/>)}</div>)
    :(
       <>
       <div className="searchBar p-3 my-2 bg-pink-50">
            <input className="p-1 placeholder:italic placeholder:p-1 focus:border-pink-500 focus:outline-none border border-pink-300 focus:ring-pink-500 focus:ring-1 rounded-sm px-2" name="searchBar" value={searchValue} placeholder="Serach" onChange={(e)=>{
                setSearchValue(e.target.value)
            }} />
            <button className="mx-2 bg-pink-500 p-1 rounded px-4" onClick={()=>{
               let data = filterData(restaurantList,searchValue)
               setFiltedRestaurantList(data)
            }}>Search</button>

       </div>
       <div className=" flex flex-wrap justify-start bg-pink-100 ">
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