import { Link } from 'react-router-dom'
import {IMG_CDN_LINK} from '../constant'

 export const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating,id}) =>{
    return(
        <Link to={'/restaurant/'+id}>
        <div className=" w-52 bg-pink-50 p-2 m-2 shadow-lg min-h-min">
        <img className='w-57' src={IMG_CDN_LINK+`${cloudinaryImageId}`} alt=""/>
        <h3 className='font-bold'>{name}</h3>
        <h5 className='break-words'>{cuisines.join(",")}</h5>
        <h4>{avgRating}</h4> 
        </div>
        </Link>
    )
}