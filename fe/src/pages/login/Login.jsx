import "./login.css"
import logo from "./forest.jpg"
import { Link } from "react-router-dom"

export default function Login(){
    return ( 
        <div className='login'>
            {/* <img className="wallpaper" src={logo} /> */}
            <div className="form">
                <form className="loginForm">
                    <div className="loginTitle">Login</div>
                    <label>Email</label>
                    <input type="text" className="loginInput" placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" className="loginInput" placeholder="password"/>
                    <button className="loginButton">Login</button>
                </form>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">REGISTER</Link>
                </button>
            </div>
        </div>
    )
}