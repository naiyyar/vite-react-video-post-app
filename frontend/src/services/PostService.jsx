import { API_URL } from "../constant";

async function fetchPosts() {
    const res = await fetch(API_URL);
    if(!res.ok){
        console.error(res)
        throw new Error(res.statusText)
    }
    return res.json();
}

async function deletePost(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    
    if(!response.ok) {
        throw new Error(response.status);
    }

    if(response.status == 204){
        return null;
    }
    
    return response.json()
}

async function getPost(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'GET',
    });
    
    if(!response.ok) {
        throw new Error(response.status);
    } 

    return response.json()
}

export { fetchPosts, deletePost, getPost }