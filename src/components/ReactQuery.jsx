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
        // staleTime:30000, // Time to cache the data to prevent frequent requests
        // refetchInterval:1000, //Time to resend the request and refetch (1s => 1000ms)
        // refetchIntervalInBackground: true //Eventhough when we go to another tab the requests will be made in our tab
        // enabled:false //stops querying while component mounts
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
<h1>Using Tanstack</h1>
<button onClick={refetch}>Fetch Posts</button>
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