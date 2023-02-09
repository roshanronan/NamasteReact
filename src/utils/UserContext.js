import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Roshan",
        email:"singhroshandu@gmail.com"
    }
})

UserContext.displayName='UserContext'

export default UserContext;