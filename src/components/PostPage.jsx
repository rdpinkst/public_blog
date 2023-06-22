import { useLocation } from "react-router-dom";

function PostPage() {
    const location = useLocation();
    const {title, body } = location.state;

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostPage;