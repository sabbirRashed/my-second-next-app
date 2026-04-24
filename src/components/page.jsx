"use client"
import React, { use } from 'react';

const Posts = ({postPromise}) => {
    const posts = use(postPromise);
    console.log(posts)
    
    return (
        <div>
           <p className='text-4xl text-red-500'>total post: {posts.length}</p>
           {
            posts.map(post => <h2 key={post.id} className='text-center'>{post.title}</h2>)
           }
        </div>
    );
};

export default Posts;