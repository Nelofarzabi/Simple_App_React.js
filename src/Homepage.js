import { useState } from "react";
import Bloglist from "./Bloglist";


const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: "My new website ", body: "Lorum ipsum .... ", autor: "mario", id: 1 },
        { title: "Welcome the party ", body: "Lorum ipsum .... ", autor: "yoshi", id: 2 },
        { title: "Web dev top tips ", body: "Lorum ipsum .... ", autor: "mario", id: 3 }
    ]);
    return (
       
        <div className="home">
           <Bloglist blogs ={blogs}
           title = "All Blogs " 
           />

        </div>

    );

}
export default Home;
