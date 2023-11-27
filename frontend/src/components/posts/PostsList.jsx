import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../constant';
import { Link } from 'react-router-dom';
import './PostsList.css';

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

    const deletePost = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            
            if(!response.ok) {
                throw new Error(response.status);
            } else {
                setPosts(posts.filter((post) => post.id !== id));
            }
         } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='posts'>
            {posts.map(post => (
                <div key={post.id} >
                    <h2>
                        <Link to={`/posts/${post.id}`} className='post-title'> 
                            {post.title}
                        </Link>
                    </h2>
                    <Link to={`/posts/${post.id}/edit`}>
                        Edit
                    </Link>
                    {' | '}
                    <button to={`/posts/${post.id}`} onClick={() => deletePost(post.id)}>
                        Delete
                    </button>

                </div>
            ))}
        </div>
    );
};

export default PostsList;
