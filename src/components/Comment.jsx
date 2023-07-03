import {PropTypes} from "prop-types";

function Comment({name, comment}) {
    return (
        <div className="commentdiv">
            <p className="commentor">{name}</p>
            <p>{comment}</p>
            <p className="date">Jan 1, 2023</p>
        </div>
    )
}

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
}

export default Comment;
