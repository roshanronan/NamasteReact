import { IMG_CDN_LINK } from "../constant";



const FoodCard = ({id,name,cloudinaryImageId,isVeg,inStock,category,description,price})=>{
    return(
        <div className="w-1/4 h-28 m-2 p-2 flex space-x-2 bg-white rounded-md">
        <img className="h-full w-1/4 object-cover rounded" src={IMG_CDN_LINK+cloudinaryImageId}></img>
        <div className="flex flex-col">
        <span>{isVeg?"🌱":"🍖"}</span>
        <h2>{name}</h2>
        <p>{price}</p>
        </div>
        </div>
    )
}

export default FoodCard;