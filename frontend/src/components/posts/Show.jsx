import React, {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deletePost as deleteCurrentPost, getPost as getCurrentPost } from '../../services/PostService'; 

function ShowPost() {
    const [post, setPost] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            try {
                const data = await getCurrentPost(id);
                setPost(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getPost();
    }, [id]);

    const deletePost = async (id) => {
        try {
            await deleteCurrentPost(id);
            navigate('/');
         } catch (error) {
            console.error('Failed to delete the post', error);
        }
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <ul>
                <li>
                    <Link to={`/`}> Back to posts </Link>
                </li>
                <li>|</li>
                <li>
                    <Link to={`/posts/${post.id}/edit`}>
                        Edit
                    </Link>
                    {' | '}
                    <button to={`/posts/${post.id}`} onClick={() => deletePost(post.id)}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default ShowPost;
