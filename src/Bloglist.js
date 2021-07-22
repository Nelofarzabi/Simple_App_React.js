
const Bloglist = (props) => {
    let blogs = props.blogs;
    let blogTitle = props.title;
    return (
        <div className="blogList">
            <h2>{blogTitle}</h2>
            {blogs.map((blog) => (
                <div className="preview-blog" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> written by :{blog.autor}</p>


                </div>
            )


            )}

        </div>


    );


}
export default Bloglist;