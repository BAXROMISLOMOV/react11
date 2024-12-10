import  "./index.css";
import img1 from "/imgs/Frame.png";
const Hero = (props = Hero) => {
    return (
        <div>
        <div className="container">
        <div className="text">
            <h1>Running the show has never been so easy.</h1>
            <p>Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.</p>
        </div>
        <div className="img">
             <img src= {img1} alt="" />
        </div>

        </div> 
        </div>    
    )
}       

export default Hero