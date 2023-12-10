import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import getPostComments from "../customHooks/getPostComments";
import postAComment from "../customHooks/postAComment";
import Comment from "./Comment";
import WriteComment from "./WriteComment";



function PostPage() {
    const queryClient = useQueryClient();
    const location = useLocation();
    const {title, body, id } = location.state;
    const results = useQuery({queryKey: ["comments", id], queryFn: getPostComments});

    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const mutation = useMutation({
        mutationFn: postAComment,
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ["comments", id]})
        }
    })
    // console.log(mutation.variables)

    return (
        <div className="post-page">
            <nav className='nav-home'>
                <Link to='/'><h2>Ryan&apos;s Blog</h2></Link>
            </nav>
            <h1>{title}</h1>
            <p className="post-body">{body}</p>
            <div className="center-comments">
              {results.data?.map((val) => {
                  return <Comment key= {val._id}  name= {val.username} comment= {val.comment} timeStamp={val.timeStamp} />
              })} 
              <WriteComment 
                id={id} 
                mutation={mutation} 
                name={name} 
                setName = {setName} 
                text={text}
                setText={setText}/>
            </div>  
        </div>
    )
}

export default PostPage;

