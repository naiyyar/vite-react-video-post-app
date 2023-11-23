import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../constant';
import { Link } from 'react-router-dom';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(API_URL);
            res
                .json()
                .then(res => setPosts(res))
                .catch(err => setError(err));
        }
        fetchData();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} >
                    <h2>
                        <Link to={`/posts/${post.id}`} className='post-title'> 
                            {post.title}
                        </Link>
                    </h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsList;
