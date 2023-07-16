import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Comment from "./Comment";
import WriteComment from "./WriteComment";



function PostPage() {
    const location = useLocation();
    const {title, body, id } = location.state;
    const API_GET_COMMENTS = "https://holy-water-2894.fly.dev/api/v1/posts/" + id + "/comments"

    const [comment, setComment] = useState([]);

    // useEffect to fetch all comments for particular post
    useEffect(() => {
        getPost();
    }, [])

    async function getPost() {
        try {
            const res = await fetch(API_GET_COMMENTS, {
                method: "GET",
                mode: "cors"
            });
            const data = await res.json();

            if(data.length > 0) {
                setComment(data.reverse());
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="post-page">
            <nav className='nav-home'>
                <Link to='/'><h2>Ryan&apos;s Blog</h2></Link>
            </nav>
            <h1>{title}</h1>
            <p className="post-body">{body}</p>
            <div className="center-comments">
              {comment.map((val) => {
                  return <Comment key= {val._id}  name= {val.username} comment= {val.comment} timeStamp={val.timeStamp} />
              })}
              <WriteComment id={id} setComment= {setComment} />
            </div>  
        </div>
    )
}

export default PostPage;

