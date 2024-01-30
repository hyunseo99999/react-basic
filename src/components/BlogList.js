
import axios from "axios";
import {useState, useEffect} from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import PropTypes, {number} from "prop-types";
import Pagination from "../components/common/Pagination"
const BlogList = ({isAdmin}) => {

    const history = useHistory();
    const [posts, setPosts] = new useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPosts, setNumberOfPosts] = useState(0);
    const limit = 5;
    useEffect(() => {
        setNumberOfPosts(Math.ceil((numberOfPosts / limit)));
    }, [numberOfPosts]);

    const getPosts = (page = 1) => {
        setCurrentPage(page);
        let params = {
            _page: page,
            _limit: limit,
            _sort: "id",
            _order: "desc",
        }

        if (!isAdmin) {
            params = {...params, publish: true};
        }

        axios.get(`http://localhost:3001/posts`, {
            params: params
        }).then(res => {
            setNumberOfPosts(res.headers['x-total-count']);
            setPosts(res.data);
            setLoading(false);
        })
    };
    const deleteBlogs = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3001/posts/${id}`)
            .then(response => {
                getPosts();
            });
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) {
        return (
            LoadingSpinner()
        )
    }

    if (posts.length === 0) {
        return (
            'No Blog posts found'
        )
    }

    const renderBlogList = () => {
        return posts.filter(post => {
            return isAdmin || post.publish;
        }).map(post => {
            return (
                <Card
                    key={post.id}
                    title={post.title}
                    onClick={ () => history.push(`/blogs/${post.id}`) } >
                    {isAdmin ? (
                        <div>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={ (e) => deleteBlogs(e, post.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ) : null}
                </Card>
            );
        })
    }

    return (
        <dev>
            { renderBlogList() }
            { numberOfPosts > 1 && <Pagination
                    currentPage={currentPage}
                    numberOfPages={numberOfPosts}
                    limit={limit}
                    onClick={getPosts}
                />
            }
        </dev>
    )
}

BlogList.propTypes = {
    isAdmin: PropTypes.bool
}

BlogList.defaultProps = {
    isAdmin: false
}

export default BlogList;