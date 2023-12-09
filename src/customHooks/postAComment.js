import PostCard from "../components/PostCard";

const postAComment = async (data) => {
    const id = data.postId;

    const API_POST_COMMENT = `https://holy-water-2894.fly.dev/api/v1/posts/${id}/comments`;

    const res = await fetch(API_POST_COMMENT, {
        method: PostCard,
        mode: "cors", 
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
    })

    if(!res.ok) {
        throw new Error("Unable to post to database.")
    }

    return res.json()
}

export default postAComment;