import { useState } from "react";

function WriteComment({  id, setComment }) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const API_POST_COMMENT = "https://holy-water-2894.fly.dev/api/v1/posts/" + id + "/comments"

    function onSubmit(e) {
        e.preventDefault();
        const data = postComment();
        setComment(prevComment => [...prevComment, {username: name, comment: text, _id: data._id}])
        setName("");
        setText("");

    }

    async function postComment() {
        const data = {username: name, comment: text, postid: id};
        try {
            const res = await fetch(API_POST_COMMENT, {
                method: "POST",
                mode: "cors", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await res.json();
            return resData;
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <form>
            <div className="form-input">
                <label htmlFor="name">Username:</label>
                <input id="name" type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="form-input">
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" rows="4" name="comment" onChange={(e) => setText(e.target.value)} value={text} />
            </div>
            <div className="form-input">
                <button onClick={onSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default WriteComment;