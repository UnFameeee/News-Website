import SideBar from "../../component/sidebar/SideBar"
import SinglePost from "../../component/singlePost/SinglePost"
import "./single.css"

export default function Single(){
    return ( 
        <div className='single'>
            <SinglePost/>
            <SideBar/>
        </div>
    )
}