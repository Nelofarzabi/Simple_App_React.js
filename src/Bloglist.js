
const Bloglist = ({blogs , title , handleDelte}) => {
   
  
    return (
        <div className="blogList">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="preview-blog" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> written by :{blog.autor}</p>
                    <button onClick={()=> handleDelte(blog.id)}>Delete Blog</button>


                </div>
            )


            )}

        </div>


    );


}
export default Bloglist;