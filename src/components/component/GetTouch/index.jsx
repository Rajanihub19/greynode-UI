import React from "react";
import './touch.css'
const Touch = () => {
    return (
        <div className=" space">
            <div className="query d-grid gap-2">
                <div><h2>Get in <span className="touch">Touch</span></h2></div>
                <div><img src="\images\query.png" /></div>
                <div className="d-flex d-grid gap-2">
                    <div > <input className="input" />
                        <div className="user1"><img src="\images\user.png" /></div>
                        <div className="text25"><p>Full Name</p></div>
                    </div>
                    <div > <input className="input1" />
                        <div className="user1"> <img src="\images\envelope 1.png" /></div>
                        <div className="text25"><p>Email Address</p></div>
                    </div>
                </div>

                <div><textarea className="msg" />
                    <div className='text20'><p>Write Your Message Here....</p></div>
                </div>

                <div ><button className="btn55">Submit</button></div>
            </div>
            <div className=" bgsecond">
                <div ><img width="100%" className="img9" src="images\groupphoto.png"></img></div>
                <div className="hower1"><h2>Business Hub</h2></div>
                <div className="hower2"><p>Everyone from newly online businesses to<br />
                    experienced marketers can get results with <br />
                    Meta. Check out their stories<br />
                    for some inspiration. </p></div>
                <div className="buttonhower"><button className="btn99">Get Started</button></div>
                <div className="dasharrow"><img src="\images\dashhh.png" /></div>

            </div>
        </div>
    )
}
export default Touch;