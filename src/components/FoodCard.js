import { useDispatch } from "react-redux";
import { IMG_CDN_LINK } from "../constant";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";



const FoodCard = (props)=>{
    const {id,name,cloudinaryImageId,isVeg,inStock,category,description,price} = props.item
    const dispatch = useDispatch()
    const addItemToCart =(item)=>{
        dispatch(addItem(item))
    }
    return(
        <div className="w-1/4 h-28 m-2 p-2 flex space-x-2 bg-white rounded-md">
        <img className="h-full w-1/4 object-cover rounded" src={IMG_CDN_LINK+cloudinaryImageId}></img>
        <div className="flex flex-col">
        <span>{isVeg?"🌱":"🍖"}</span>
        <h2>{name}</h2>
        <p>{price}</p>
        </div>
        <button className="text-pink-800 border border-amber-500 rounded " onClick={()=>addItemToCart(props.item)}> Add Item </button>
        </div>
    )
}

export default FoodCard;