import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URL } from '../../constant';

function ShowPost() {
    const [post, setPost] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await fetch(`${API_URL}/${id}`);
                const json = await res.json();
                setPost(json);
            }
            catch (error) {
                console.log(error);
            }
        };
        getPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/">Back to Posts</Link>
        </div>
    );
}

export default ShowPost;
