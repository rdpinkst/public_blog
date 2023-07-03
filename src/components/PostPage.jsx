import { useLocation } from "react-router-dom";
import Comment from "./Comment";
import WriteComment from "./WriteComment";

function PostPage() {
    const location = useLocation();
    const {title, body } = location.state;

    return (
        <div className="post-page">
            <h1>{title}</h1>
            <p>{body}</p>
            <div className="center-comments">
              {comments.map((val, index) => {
                  return <Comment key= {index}  name= {val.name} comment= {val.comment} />
              })}
              <WriteComment />
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