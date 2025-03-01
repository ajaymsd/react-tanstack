import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'
function ReactQuery() {
    const {data, isLoading, isError, error, isFetching, refetch} = useQuery({
        queryKey:["posts"],
        queryFn:() => {
            return axios.get("http://localhost:4000/posts");
        },
    })
    console.log(isLoading,isFetching);

    if (isError) {
        return <div>{error.message}</div>
    }

    if (isLoading) {
        return <div>Loading ........</div>
    }
    console.log(data);
    
  return (
    <div>
<h1>Tanstack pagination</h1>
{data?.data && data?.data.map((post,key)=>(
    <Link to = {`/react-query/${post.id}`} key={key}>
<div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
         </div>
    </Link>
         
        ))}
    </div>
    

  )
}

export default ReactQuery