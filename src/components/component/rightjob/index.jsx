import React from "react";
import './index.css'
const FindJob = () => {
    return (
        <div className="d-flex bg">
            <img className="imgpp" src="\images\pp.png" />
            <div className="job">
                <div ><img src="images\findjob.png" /></div>
                <div><img src="images\Suggested Searches.png" /></div>

                <div className="d-flex">
                    <div className="button21 p-2"><button className="button20">Engineering</button></div>
                    <div className="button21 p-2"><button className="button22">Business Development</button></div>
                    <div className="button21 p-2"><button className="button22">Finance</button></div>
                </div>
                <div className="d-flex">
                    <div className="button21 p-2"><button className="button22">Administrative Assistant</button></div>
                    <div className="button21 p-2"><button className="button22">Retail Associate</button></div>
                    <div className="button21 p-2"><button className="button22">Customer Services</button></div>
                </div>
                <div className="d-flex">
                    <div className="button21 p-2"><button className="button22">Operations</button></div>
                    <div className="button21 p-2"><button className="button22">Information Technology</button></div>
                </div>
                <div className="me-5">Search More</div>

            </div>
            <div className="job1">
                <img src="\images\happyman.png" />
            </div>
        </div>
    )
}
export default FindJob;