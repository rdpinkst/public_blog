import {PropTypes} from "prop-types";

function Comment({name, comment, timeStamp}) {
    return (
        <div className="commentdiv">
            <p className="commentor">{name}</p>
            <p>{comment}</p>
            <p className="date">{new Date(timeStamp).toLocaleDateString()}</p>
        </div>
    )
}

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
}

export default Comment;
