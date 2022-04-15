import { Link } from "react-router-dom"
import "./register.css"

export default function Register(){
    return ( 
        <div className='register'>
            {/* <img className="wallpaper" src={logo} /> */}
            <div className="form">
                <form className="registerForm">
                    <div className="registerTitle">Register</div>
                    <label>Username</label>
                    <input type="text" className="registerInput" placeholder="Username"/>
                    <label>Email</label>
                    <input type="text" className="registerInput" placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" className="registerInput" placeholder="password"/>
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton">
                    <Link className="link" to="/login">LOGIN</Link>
                </button>
            </div>
        </div>
    )
}