import Header from "../../component/header/Header.jsx"
import Sidebar from "../../component/sidebar/Sidebar.jsx"
import Posts from "../../component/posts/Posts.jsx"
import "./home.css"

export default function Home(){
    return ( 
        <>
            <Header/>
            <div className="home">

                <Posts/>
                <Sidebar/>
                
            </div>
        </>
    )
}