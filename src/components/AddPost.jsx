import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: () => axios.get("http://localhost:4000/posts"),
    });

    console.log(isLoading, isFetching);

    if (isError) {
        return <div>{error.message}</div>;
    }

    if (isLoading) {
        return <div>Loading ........</div>;
    }

    console.log(data);

    const { mutate } = useMutation({
        mutationFn: (post) => axios.post("http://localhost:4000/posts", post),
        onSuccess: () => {
            window.alert("Post added successfully");
            refetch();
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, description };
        mutate(post);
        setTitle(""); 
        setDescription("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder="Title" 
                    name="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    type='text' 
                    placeholder="Description" 
                    name="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <button type='submit'>Submit</button>
            </form>

            {data?.data && data?.data.map((post) => (
                <Link to={`/react-query/${post.id}`} key={post.id}>
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default AddPost;
