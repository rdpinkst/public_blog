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
            <p>{body}</p>
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

const comments = [
    {
        name: "Some user",
        comment: "Users comment"
    },
    {
        name: "Some user33",
        comment: "Users comment jdkfjlkd"
    },
    {
        name: "Some user",
        comment: "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Some user",
        comment: "Users comment"
    },
]