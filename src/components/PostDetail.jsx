import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetail() {
    const {postId} = useParams();
   const {data} =  useQuery({
        queryKey:["posts", postId],
        queryFn:() => {
            return axios.get("http://localhost:4000/posts/"+postId)
        }
    })
  return (
    <div>
        {data?.data && data?.data.title}
        {data?.data && data?.data?.description}
    </div>
  )
}

export default PostDetail