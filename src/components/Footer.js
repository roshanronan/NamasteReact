
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{
    const {user} = useContext(UserContext)
    return(
        <>
            <h4 className="bg-pink-50 p-2 h-15 text-center shadow">
             This site is developed by {user.name}-{user.email}
            </h4>
        </>
    )
}


export default Footer;