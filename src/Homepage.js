import { useState } from "react";

const Home = () => {
    const [Blogs , setBlogs] = useState([
        {title : "My new website " , body : "Lorum ipsum .... " , autor : "mario" , id :1},
        {title : "Welcome the party " , body : "Lorum ipsum .... " , autor : "yoshi" , id :2},
        {title : "Web dev top tips " , body : "Lorum ipsum .... " , autor : "mario" , id :3}
    ]);
    return (
        <div className="home">
            <h2>Home</h2>
           
        </div>

    );

}
export default Home;
