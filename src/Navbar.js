import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar">
                <h1>The Dojo Blog </h1>
                <div className= "Link">
                <a href="/" style = {{color : "white" , backgroundColor:"#f1356d" ,borderRadius :"8px"}}>Home</a>
                <a href="/">New Blog</a>
               
                </div>
               

            </nav>


        );

    }


}
export default Navbar;