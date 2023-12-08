const API_GET = "https://holy-water-2894.fly.dev/api/v1/posts";

const getPostData = async () => {
    const res = await fetch(API_GET, {
        method: "GET",
        mode: "cors",
      })

    if(!res.ok) {
      throw new Error("No posts were found!")
    }
    
    return res.json();
}

export default getPostData;