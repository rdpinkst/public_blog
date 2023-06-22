import { Link, Outlet } from "react-router-dom"

function PostCard({ title, body, id }) {

  return (
    <div className="post-card">
        <h2>{title}</h2>
        <p>{body.length >= 20 ? body.slice(0, 20) + "..." : body}</p>
        <Link to={`/post/${id}`} state={{title, body}}> <button>View Post</button></Link>    
    </div>
  )
}

export default PostCard;