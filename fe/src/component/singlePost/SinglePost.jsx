import "./singlePost.css"

export default function SinglePost(){
    return ( 
        <div className='singlePost'>

            <div className="singlePostWrapper">
            <img
                className="singlePostImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="singlePostEdit">
                    <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>UnFame</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>

            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto magni nobis in esse sint voluptatum. Labore, libero iusto at, nesciunt officia cum incidunt, harum possimus ab ducimus suscipit nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto magni nobis in esse sint voluptatum. Labore, libero iusto at, nesciunt officia cum incidunt, harum possimus ab ducimus suscipit nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto magni nobis in esse sint voluptatum. Labore, libero iusto at, nesciunt officia cum incidunt, harum possimus ab ducimus suscipit nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto magni nobis in esse sint voluptatum. Labore, libero iusto at, nesciunt officia cum incidunt, harum possimus ab ducimus suscipit nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto magni nobis in esse sint voluptatum. Labore, libero iusto at, nesciunt officia cum incidunt, harum possimus ab ducimus suscipit nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto magni nobis in esse sint voluptatum. Labore, libero iusto at, nesciunt officia cum incidunt, harum possimus ab ducimus suscipit nobis?
            </p>         
        </div>
    )
}