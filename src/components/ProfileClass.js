import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props)

        this.state={
            count:0,
            name:"",
            imgSrc:""
        }

        console.log("Child Constructor " +this.props.name)
    }

    async componentDidMount(){
        console.log("Child did mount "+this.props.name)
        let data = await fetch("https://api.github.com/users/roshanronan")
        let json = await data.json()
        this.setState({name:json.login})
        this.setState({imgSrc:json.avatar_url})
        console.log(json)

    }

    componentDidUpdate(){
        console.log("Child Did update "+this.props.name)
        // this.timer=setInterval(()=>{console.log('child')},1000)
    }

    componentWillUnmount(){
        // clearInterval(this.timer)
        console.log("Child will unmount "+this.props.name)
    }

    render(){
        console.log("Child render"+this.props.name)
        return(
           <div>
            <img src={this.state.imgSrc} />
           <h1> Profile Class Component</h1>
           <h2>Name:{this.state.name} 
            {this.state.count}
            </h2>
           <button onClick={()=>this.setState({
            count:1
           })}> Count</button>
           </div>
        )
    }
}

export default ProfileClass