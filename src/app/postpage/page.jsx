import React, { Suspense } from 'react';
import Posts from '../../components/page';

const PostPage = () => {
    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json());
    
    return (
        <div>
            <Suspense fallback={<h2 className='text-center text-4xl'>post loading...</h2>}>
                <Posts postPromise={postPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostPage;