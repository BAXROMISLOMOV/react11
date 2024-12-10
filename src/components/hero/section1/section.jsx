import "./section.css"; 
import img from "/imgs/Frame (1).png"
import img1 from "/imgs/Frame (2).png"
import icon from "/imgs/Rectangle.svg"
import icon1 from "/imgs/Rectangle (1).svg"
import icon2 from "/imgs/Rectangle (2).svg"
import icon3 from "/imgs/Rectangle (3).svg"
import icon4 from "/imgs/Rectangle (4).svg"
function  Section () { 
    return(
      <div className="section">
        <div className="person">
          <img src= {img} alt="" />
          <div className="text">
            <h1>Put the human back in HR.</h1>
            <p>Your employees are the real stars. Show the love and help them perform!</p>
          </div>
        </div>
        <div className="person2">
          <div className="text">
            <h1>You don’t have to play all the parts.</h1>
            <p>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</p>
          </div>
          <img src= {img1} alt="" />
        </div>
        <div className="frame">
          <h1>We partner with the best</h1>
          <div className="icon">
            <img src= {icon} alt=""/>
            <img src= {icon1} alt=""/>
            <img src= {icon2} alt=""/>
            <img src= {icon3} alt=""/>
            <img src= {icon4} alt=""  />
          </div>
        </div>
      </div>

    )
}
export default Section 