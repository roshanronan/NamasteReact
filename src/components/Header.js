import { useState } from "react";

const Title =()=>{
    return(
          <img className="logo"
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
          alt="Food Villa Logo"/>
       )
}

const Header = () =>{

    const [isLogin,setIsLogin] = useState(false)

    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            
        </div>
        {
            isLogin
            ?<button onClick={()=>{setIsLogin(false)}}>Logout</button>
            :<button onClick={()=>{setIsLogin(true)}}>Login</button>
        }
    </div>
    )
 }

export default Header;