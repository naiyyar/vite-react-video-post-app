// Path: frontend/src/components/posts/EditPost.jsx
import { useState, useEffect } from "react";
import { API_URL } from "../../constant";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();
    const post = { title, body };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${API_URL}/${id}`);
            const data = await response.json();
            setTitle(data.title);
            setBody(data.body);
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post),
        });
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            navigate(`/posts/${id}`);
        }
    }

    if(!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="form">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>  <br />
                <input type="text" id="title" value={post?.title} onChange={(e) => setTitle(e.target.value)}/>
                <br />
                <label htmlFor="body">Body</label>  <br />
                <textarea id="body" value={post?.body} onChange={(e) => setBody(e.target.value)}/>  <br />
                <input type="submit" value="Update Post" />
            </form>
        </div>
    );
}

export default EditPost;
