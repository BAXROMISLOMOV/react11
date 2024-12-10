import  "./nav.css";
import img from "/imgs/Frame (1).svg";  

function Nav () {
    return (
        <div>
        <nav>
            <div className="logo">
                <img src={img} alt="" />
            </div>
            <ul>
                <li><a href="">Log In</a></li>
                <li><a href="">844-332-6440</a></li>
                <li><button>Get Started</button></li>
            </ul>

        </nav>
        </div>    
    )
}       

export default Nav