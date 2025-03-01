import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
function TraditionalFetch() {
      const [posts, setPosts] = useState([]);

      useEffect(()=>{
        const fetchPosts = async() => {
            const response = await axios.get("http://localhost:4000/posts");
            setPosts(response.data);
            console.log(response.data);
            
        }

        fetchPosts();
      },[]);
  return (
    <div>
        <h1>Traditional Way</h1>
        {posts.length > 0 && posts.map((post,key)=>(
         <div key={key}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
         </div>
        ))}
    </div>
  )
}

export default TraditionalFetch;