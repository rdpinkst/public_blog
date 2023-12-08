const getPostComments = async ({queryKey}) => {
    const id = queryKey[1];
    
    const API_GET_COMMENTS = `https://holy-water-2894.fly.dev/api/v1/posts/${id}/comments`;
    
    const res = await fetch(API_GET_COMMENTS, {
        method: "GET",
        mode: "cors"
    });

    if(!res.ok) {
        throw new Error("No posts found")
    }

    return res.json();
}

export default getPostComments;