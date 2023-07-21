import React from "react";
import './index.css'
const Community = () => {
    return (
        <div className="my-5 ">
            <div className="d-grid gap-3 mb-3">
                <div className="community"><h2>Graynod Community <span className="news">News</span></h2></div>
                <div className="latest"><p>Get the latest news from business,real estate,stocks <br /> and other features stories</p></div>
            </div>
            <div className="d-lg-flex d-grid gap-3 cards  ">
                <div className="card d-grid gap-3  ">
                    <div className="circle"><img className="icons" src="\images\briefcase.png" /></div>
                    <div><h3>Business</h3></div>
                    <div><p>Lorem ipsum is simply dummy text of the <br />printing and typesetting industry</p></div>
                </div>
                <div className="card d-grid gap-3  ">
                    <div className="circle"><img className="icons" src="\images\building.png" /></div>
                    <div><h3>Real Estate</h3></div>
                    <div><p>Lorem ipsum is simply dummy text of the <br />printing and typesetting industry</p></div>
                </div>
                <div className="card d-grid gap-3  ">
                    <div className="circle"><img className="icons" src="\images\stats .png" /></div>
                    <div><h3>Stocks</h3></div>
                    <div><p>Lorem ipsum is simply dummy text of the <br />printing and typesetting industry</p></div>
                </div>
            </div>

        </div>

    )
}
export default Community;