import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from './ProfileClass';
import UserContext from "../utils/UserContext";



// const About =()=>{
//     return(
//         <div>
//             <h2>This the about page of food villla...😁😀</h2>
//             <Profile name="fRosan" lastName ="fsingh"/>
//             <ProfileClass name="Roshan" lastName ="singh"/>
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props)
    console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Did mount")
    }

    componentDidUpdate(){
        console.log("Parent Did update")
    }

    componentWillUnmount(){
        console.log("Parent will unmount")
    }

    render(){
        console.log("Parent Render")
        return(
            <div>
            <UserContext.Consumer>
            {({user})=><h2 className="font-extrabold">{user.email}</h2>}
            </UserContext.Consumer>
            <h2>This the about page of food villla...😁😀</h2>
            <Profile name="fRosan" lastName ="fsingh"/>
            <ProfileClass name="first child" lastName ="singh"/>
           { 
            //<ProfileClass name="second child" lastName ="singh"/>
           }
        </div>
        )
    }
}

export default About;