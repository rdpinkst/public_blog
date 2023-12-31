import { useQuery } from '@tanstack/react-query'
import getPostData from '../customHooks/getPostData'
import PostCard from './PostCard'
import '../App.css'


function Home() {
  const results = useQuery({queryKey: ["post"], queryFn: getPostData})
  let post = results.data;

  // const [post, setPost] = useState([]);

  // useEffect(() => {
  //   getPost()
  // }, [])


  // async function getPost() {
  //   try {
  //     const res = await fetch(API_GET, {
  //       method: "GET",
  //       mode: "cors",
  //     });
  //     const data = await res.json();
  //     const publishData = data.filter(item => item.publish === "true");
  //     setPost(publishData);
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className='app'>
      <section className='blog-title'>
        <h1>Ryan&apos;s Blog</h1>
      </section>
      <div className='divider top'></div>
      <section className='blog-description'>
        <div className='max-width'>
          <div className='contain-svg'>
            <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 31.94C416 21.75 408.1 0 384.1 0c-13.98 0-26.87 9.072-30.89 23.18l-128 448c-.8404 2.935-1.241 5.892-1.241 8.801C223.1 490.3 232 512 256 512c13.92 0 26.73-9.157 30.75-23.22l128-448C415.6 37.81 416 34.85 416 31.94zM176 143.1c0-18.28-14.95-32-32-32c-8.188 0-16.38 3.125-22.62 9.376l-112 112C3.125 239.6 0 247.8 0 255.1S3.125 272.4 9.375 278.6l112 112C127.6 396.9 135.8 399.1 144 399.1c17.05 0 32-13.73 32-32c0-8.188-3.125-16.38-9.375-22.63L77.25 255.1l89.38-89.38C172.9 160.3 176 152.2 176 143.1zM640 255.1c0-8.188-3.125-16.38-9.375-22.63l-112-112C512.4 115.1 504.2 111.1 496 111.1c-17.05 0-32 13.73-32 32c0 8.188 3.125 16.38 9.375 22.63l89.38 89.38l-89.38 89.38C467.1 351.6 464 359.8 464 367.1c0 18.28 14.95 32 32 32c8.188 0 16.38-3.125 22.62-9.376l112-112C636.9 272.4 640 264.2 640 255.1z"/></svg>
          </div>
          <p>In this blog I will demonstrate concepts and topics I have learned, 
            on my journy learning web development.  My journey learning started in the 
            summer of 2020, and I have came a long way.</p>
          <div className='slant'></div>  
        </div>
      </section>
      <div className='divider'></div> 
      <section className='blog-posts'>
        {post?.filter(item=> item.publish === "true").map(info => {
        return <PostCard key={info._id} body={info.postBody} title={info.title} id={info._id} />
        })}
      </section>
    </div>
  )
}

export default Home