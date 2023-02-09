import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title =()=>{
    return(
          <img className="h-20 w-20 p-2"
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          alt="Food Villa Logo"/>
       )
}

const Header = () =>{

    const {user} = useContext(UserContext)

    const [isLogin,setIsLogin] = useState(false)
    const online = useOnline()

    return(
        <div className="flex md:justify-between flex-col md:flex-row shadow bg-pink-50 ">
        <Title/>
        <div className=" ">
            <ul className="flex py-5 space-x-4 md:flex-row flex-col" >
                <li><Link to='/' >Home</Link></li>
                <li><Link to= '/about'>About</Link></li>
                <li><Link to= '/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/instamart'>Instamart</Link></li>
                <li>Cart</li>
            </ul>
            
        </div>
        {online?"🤩":"😪"}
        {<span className="p-2 m-2 font-bold text-red-900">{user.name}</span>}
        {
            isLogin
            ?<button onClick={()=>{setIsLogin(false)}}>Logout</button>
            :<button onClick={()=>{setIsLogin(true)}}>Login</button>
        }
    </div>
    )
 }

export default Header;