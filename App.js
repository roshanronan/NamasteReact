import React from "react"
import ReactDOM from 'react-dom/client';
import logo from './assets/logo192.png';
import user from './assets/user.png';


const heading1 = React.createElement('h1',{key:1},'React element heading')
const heading2 = React.createElement('h2',{key:2},'React element heading')
const heading3 = React.createElement('h3',{key:3},'React element heading')

//React element with multiple sub tags
const header = React.createElement('div',{className:'title'},[heading1,heading2,heading3])

const JSXh1 = ()=> <h1>JSX heading</h1>
const JSXh2 = ()=> <h2>JSX heading</h2>
const JSXh3 = ()=> <h3>JSX heading</h3>
const JSXh4 = ()=> <h4>JSX heading</h4>


//React funtional component with component compositon
const JSXHeader = ()=>(
    <div className="title">
    
        {JSXh1() }
        {<JSXh2></JSXh2>}
        {<JSXh3/>}
        <JSXh4/>
    </div>
)

//Using React funtional component and React element
const MainContainer = () =>(
    <div>  
    <Header></Header>
    <JSXHeader/>  
    {header}
    </div>
)

const Logo = () =>(
        <div >
         <img className="logo" src={logo} alt="react logo"/>
        </div>
    )
const SearchBar = () =>(
    <div>
     <input className="serchbar" type="text" placeholder="Serach Bar"/>
    </div>
)
const User = () =>(
    <div>
        <img className="user" src={user} />
    </div>
)

const Header = () =>(
    <div className="headerContainer">
       <Logo/>
       <SearchBar/>
       <User/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MainContainer/>)