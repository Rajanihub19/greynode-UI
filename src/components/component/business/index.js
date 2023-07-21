import React from "react";
import './business.css'
const Business = () => {
    return (
        <div className="row business1 m-5">
            <div className="d-flex background12 col">
                {/* <div className="d-flex background12  "> */}
                <div className="ms-5 d-grid gap-2 ">
                    <div className="d-flex">
                        <div className="lockey"><img className="lockey2" src="\images\brieffffff.png" /></div>
                        <div className="arrow2"><img src="\images\up-arrow.png" /></div>
                    </div>
                    <div><img src="images\Find A Business.png" /></div>
                    <div><img src="\images\here.png" /></div>
                    <div className="">
                        <button className="btn24" >Search</button>
                    </div>
                </div>
                <div className="girlimg"><img src="\images\employee.png" /></div>
            </div>
            <div className=" col background1">
                <div><img src="\images\Explore topics you are interested in.png" /></div>
                <div><img src="\images\Content Topics.png" /></div>
                <div className="d-grid gap-3">
                    <div className="d-flex d-grid gap-3 ">
                        <div><button className="button25">See All Topics</button></div>
                        <div><button className="button25">Science And Enviornment</button></div>
                        <div><button className="button25">Marketing And Advertising</button></div>
                    </div>
                    <div className="d-flex d-grid gap-3 ">
                        <div><button className="button25">Sales and Retail</button></div>
                        <div><button className="button25">Technology</button></div>
                        <div><button className="button25">Finance and Economy</button></div>
                        <div><button className="button25">Health</button></div>
                    </div>
                    <div className=" d-grid gap-3 ">
                        <div><button className="button25">Businness and Management</button></div>
                    </div>
                    <div>See More</div>
                </div>
            </div>

        </div>
        // </div>
    )
}
export default Business;