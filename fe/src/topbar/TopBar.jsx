import "./topbar.css"

export default function TopBar(){
    return ( 
        <div className='top'>
            <div className="topLeft">
                <i class="fa-brands fa-facebook-square"></i>
                <i class="fa-brands fa-twitter-square"></i>
                <i class="fa-brands fa-google-plus-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="" />
            </div>
        </div>
    )
}