import React , { Component } from "react";

class Home extends Component{
   
    render() {
        const  show = (name) => {
            console.log("hello janm");
        };
        const hide = (name) =>{
            console.log ("hello" + name  )
        }
     
        return (
            <div className ="homePage">
            <h2>Home Page </h2>
         <button onClick = {show()}
         >Show Me</button>
         <button onClick={()=>{
             hide('nelofar')
         }} >Hide Me</button>

            
            </div>
        );
    }

}
export default Home ;
