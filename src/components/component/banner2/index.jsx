import React from "react";
import './banner2.css'
const Banner2 = () => {
    return (
        <div className=" d-flex background">
            <div className="col-lg-6 col-md-6 col-12">
                <div className="mt-3">
                    <img src="images\group.png" className=" mb-5"></img>
                </div>
                <div className="text1">
                    <h1>Meet Your <br />
                        <span className="banner2"> Community</span> People </h1>
                    <div className="arrow"><img src="images\arrow.png" /></div>
                    <div><img src="images\text2.png" /></div>
                    <div className="mt-5"><button className="button2">Explore More</button></div>
                </div>
            </div>
            <div className="col2">
                <div className='map'><img src="images\map.png" /></div>
                <div className="photo1"><img className="img" src="\images\chashmish.png" /></div>
                <div className="photo2"><img className="img" src="\images\AshleyAllen-Blog 1.png" /></div>
                <div className="photo3"><img className="img" src="\images\yound.png" /></div>
                <div className="photo4"><img className="img" src="\images\successful.png" /></div>
                <div className="photo5"><img className="img" src="images\topiwala.png" /></div>
                <div className="photo6"><img className="img" src="\images\programmer.png" /></div>
            </div>
        </div>
    )
}
export default Banner2;
