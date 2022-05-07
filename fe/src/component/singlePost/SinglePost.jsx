import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./singlePost.css"

export default function SinglePost(){
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    const PF = "http://localhost:5000/images/";

    const {user} = useContext(Context)

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path])

    return ( 
        <div className='singlePost'>

            <div className="singlePostWrapper">
            {post.photo && (
                <img
                    className="singlePostImg"
                    // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    src={PF + post.photo}
                    alt=""
                    />
            )}
            </div>
            <h1 className="singlePostTitle">
                {post.title}
                {post.username === user?.username && (
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                )}
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                Author:
                    <Link to={`/?user=${post.username}`} className="link">
                        <b> {post.username}</b>
                    </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>

            <p className="singlePostDesc">{post.desc}</p>         
        </div>
    )
}