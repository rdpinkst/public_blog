import { Link } from "react-router-dom";
import {PropTypes} from "prop-types";

function PostCard({ title, body, id }) {

  return (
    <div className="post-card">
        <h2>{title}</h2>
        <p>{body.length >= 20 ? body.slice(0, 20) + "..." : body}</p>
        <Link to={`/post/${id}`} state={{title, body}}> <button>View Post</button></Link>    
    </div>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

}

export default PostCard;