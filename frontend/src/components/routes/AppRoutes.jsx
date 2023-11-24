import React, {} from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "../../components/posts/PostsList";
import ShowPost from "../../components/posts/Show";
import NewPost from "../../components/posts/NewPost";
import EditPost from "../../components/posts/EditPost";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="posts/:id" element={<ShowPost />} />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route path="/new" element={<NewPost />} />
        </Routes>
    )
}

export default AppRoutes;