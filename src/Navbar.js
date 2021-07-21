import React , { Component } from "react";

class Navbar extends Component{
    render(){
        return (
            <div className= "navClass">
                <nav>
                    <h1>The Dojo Blog </h1>
                    <a href= "/">Home</a>
                    <a href= "/">New</a>
                    <a href= "/">Blog</a>

                </nav>

            </div>
        );

    }
    

}
export default Navbar;