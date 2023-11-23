import axios from "axios";
import {useState, useEffect} from "react";
import Card from "../components/Card";

const ListPage = () => {
    const [posts, setPosts] = new useState([]);
    const getPosts = () => {
        axios.get("http://localhost:3001/posts").then(res => {
            setPosts(res.data);
        })
    };

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <div>
            <h1>List Page</h1>
            { posts.map(post => {
                return (
                    <Card key={post.id} title={post.title}>
                        <button>Button</button>
                    </Card>
                );
            })}
        </div>
    )
}

export default ListPage;