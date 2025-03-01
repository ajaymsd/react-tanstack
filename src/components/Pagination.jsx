import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";

function Pagination() {
    const [page,setPage] = useState(1);
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["fruits", page],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/fruits?_limit=5&_page="+page);
      return response.data;
    },
    placeholderData:keepPreviousData //this helps us to retain old data in screen until the new one loads(the loading will not show)
  });

  console.log(isLoading, isFetching);

  if (isError) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ........</div>;
  }

  return (
    <div>
      <h1>Tanstack Pagination</h1>
      {data &&
        data.map((fruit, index) => (
          <div key={index}>
            <h1>{fruit.name}</h1>
          </div>
        ))}
        <div>
              <button onClick={()=>setPage(prev => prev-1)}>Prev</button>
              <button onClick={()=>setPage(prev => prev+1)}>Next</button>
        </div>
    </div>
  );
}

export default Pagination;
