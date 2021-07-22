import { useState } from "react";
import Bloglist from "./Bloglist";


const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: "My new website ", body: "Lorum ipsum .... ", autor: "mario", id: 1 },
        { title: "Welcome the party ", body: "Lorum ipsum .... ", autor: "yoshi", id: 2 },
        { title: "Web dev top tips ", body: "Lorum ipsum .... ", autor: "mario", id: 3 }
    ]);
    const handleDelte = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id )
        setBlogs(newBlogs);

    }
    return (
       
        <div className="home">
           <Bloglist blogs ={blogs}
           title = "All Blogs " 
           handleDelte ={handleDelte}
           
           />

        </div>

    );

}
export default Home;
