import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_LINK } from "../constant";
import { removeItem } from "../utils/cartSlice";


const Cart =() =>{

    const cartItems = useSelector(store=>store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch()

    const RemoveFood=()=>{
        dispatch(removeItem())
        console.log('ros',cartItems.length)
    }
    
   return cartItems.length ==0 ?<div> Cart is empty</div>:(
        <div className="m-5 p-5 rounded">
            Cart Page
                {
                    cartItems.map((food,index)=>
                    <div key={index} className="flex w-1/4 m-2 bg-slate-300 rounded justify-between align-middle text-center">
                    <img className="h-16 w-16 rounded-l" src={IMG_CDN_LINK+food.cloudinaryImageId}/>
                    <h4 className="p-2">{food.name}</h4>
                    <div className="p-2 bg-green-400 text-center rounded-r">{food.price/100}</div>
                    <button className="p-2 bg-fuchsia-700 rounded-r" onClick={()=>RemoveFood()}>Remove</button>
                   </div>)
                }

        </div>
    )
}


export default Cart;