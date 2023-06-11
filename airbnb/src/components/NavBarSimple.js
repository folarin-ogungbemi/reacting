import React, { Component } from 'react'

export class NavBarSimple extends Component {

constructor(props) {
  super(props)

  this.state = {
     name: "Hello, guest!",
     authenticate: "log in"
  }
}

handleClick(){
    this.setState((prevState) =>{
        return{
            name: prevState.name === "Hello, guest!" ? "Welcome back, folarin!" : "Hello, guest!",
            authenticate : prevState.authenticate = "log in" ? "log out" : "log in"
        }
    })
}

  render() {
    return (
      <div>
        <h1 className="css.NavBar">My Gallery</h1>
        <span>
            <p>{this.state.name}!</p>
            <input onClick={() => this.handleClick()} type='button' value={this.state.authenticate}/>
        </span>
      </div>
    )
  }
}

export default NavBarSimple