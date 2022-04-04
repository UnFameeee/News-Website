import Header from "../../component/header/Header.jsx"
import SideBar from "../../component/sidebar/SideBar.jsx"
import Posts from "../../component/posts/Posts.jsx"
import "./home.css"

export default function Home(){
    return ( 
        <>
            <Header/>
            <div className="home">

                <Posts/>
                <SideBar/>
                
            </div>
        </>
    )
}