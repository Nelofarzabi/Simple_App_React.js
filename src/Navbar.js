import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (

            <nav className="navbar">
                <h1>The Dojo Blog </h1>
                <div className= "Links">
                <a href="/">Home</a>
                <a href="/">New Blog</a>
               
                </div>
               

            </nav>


        );

    }


}
export default Navbar;