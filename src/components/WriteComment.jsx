import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import postAComment from "../customHooks/postAComment";

function WriteComment({  id, setComment }) {
    const queryClient = useQueryClient();
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    // const API_POST_COMMENT = "https://holy-water-2894.fly.dev/api/v1/posts/" + id + "/comments"
    const mutation = useMutation({
        mutationFn: postAComment,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["comment", id]})
        }
    })

    function onSubmit(e) {
        e.preventDefault();
        // postComment();
        // if(name.length > 0 && text.length > 0) {
        //     setComment(prevComment => [...prevComment, {username: name, comment: text, _id: Math.random() * 100, timeStamp: new Date().toLocaleDateString()}])
        //     setName("");
        //     setText("");
        // }
        console.log("submitted")
        const data = {username: name, comment: text, postId: id};
       console.log(mutation)
        mutation.mutate(data, {
            onSuccess: () => {
                setName("");
                setText("");
            }
        });
    }

    // async function postComment() {
    //     if(name.length > 0 && text.length > 0){
    //       const data = {username: name, comment: text, postid: id};
    //       try {
    //           const res = await fetch(API_POST_COMMENT, {
    //               method: "POST",
    //               mode: "cors", 
    //               headers: {
    //                   "Content-Type": "application/json",
    //               },
    //               body: JSON.stringify(data),
    //           });
    //           const resData = await res.json();
    //           return resData;
    //       } catch(error) {
    //           console.error(error);
    //       }
    //     } else {
    //         alert("Name and comment needed to submit.")
    //     }
    // }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-input">
                <label htmlFor="name">Username:</label>
                <input id="name" type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="form-input">
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" rows="4" name="comment" onChange={(e) => setText(e.target.value)} value={text} />
            </div>
            <div className="form-input">
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default WriteComment;