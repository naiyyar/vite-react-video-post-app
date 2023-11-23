import { useState } from "react";
import { API_URL } from "../../constant";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { title, body };
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post),
        });
        if(!response.ok) {
            throw new Error(response.status);
        } else {
            const data = await response.json();
            navigate(`/posts/${data.id}`);
        }
    }

    return (
        <div>
            <h2>New Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="body">Body</label>
                <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)}/>
                <input type="submit" value="Create Post" />
            </form>
        </div>
    );
}

export default NewPost;