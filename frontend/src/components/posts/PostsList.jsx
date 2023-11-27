import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost as deleteCurrentPost } from '../../services/PostService';
import './PostsList.css';

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setError] = useState(null);
    const [, setLoading] = useState(true);

    useEffect(() => {
        async function loadPosts() {
            try {
                const data = await fetchPosts();
                console.log(data);
                setPosts(data);
                setLoading(false);
            } catch(e) {
                setError(e);
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    const deletePost = async (id) => {
        try {
            await deleteCurrentPost(id);
            setPosts(posts.filter((post) => post.id !== id));
         } catch (error) {
            console.error('Failed to delete the post', error);
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
