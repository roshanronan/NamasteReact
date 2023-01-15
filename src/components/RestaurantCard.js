import {IMG_CDN_LINK} from '../constant'

 export const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating}) =>{
    return(
        <div className="card">
        <img src={IMG_CDN_LINK+`${cloudinaryImageId}`} alt=""/>
        <h3>{name}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h4>{avgRating}</h4> 
        </div>
    )
}