import React from "react";
import './login.css'
const Login = () => {
    return (
        <div className=" loginbox">
            <div className='loginbox1 '>
                <div className=" box9">
                    <div className="box10"><img className='rightarrow' src="images\leftarrow.png" /> </div>
                    <div className="box11"><img className="greynode" src="\images\logo22.png" /></div>
                </div>
                <div className="login11"><img src="images\Back to Login.png" /></div>
                <div className="margin10 d-grid gap-1">
                    <div ><h3>Create an <span className="span2">account</span></h3></div>
                    <div className="PARAGRAPH"><h6>Please select your role to procees a next step</h6></div>
                    <div className="udtatir"><img src="\images\udtapanjab.png" /></div>
                    <div className="  gap-2 card20">
                        <div className="card10 ">
                            <div className="circle10">
                                <img className='img10' src="\images\userlogo.png" />
                            </div>
                            <div className="text10">User</div>
                        </div>
                        <div className="card12">
                            <div className="circle10">
                                <img className='img10' src="\images\company.png" />
                            </div>
                            <div className="text11">Company</div>
                        </div>
                    </div>
                    <div className="BTN10"><button className="button10">next</button></div>
                    <div className="leftarrow"><img src="\images\rightarrow.png" /></div>
                </div>
            </div>
            <div className="loginbox2">
                <div className="boxs">

                    <div className="row">
                        <div className="box31  col-lg-8 col-md-8 col-8"></div>
                        {/* col-lg-6 col-md-6 col-12 */}
                        <div className="box32 col-lg-4 col-md-4 col-4"></div>
                    </div>
                    <div className="row">
                        <div className="box33 col-lg-4 col-md-4 col-4"></div>
                        <div className="box38 col-lg-4 col-md-4 col-4"></div>
                        <div className="box35 col-lg-4 col-md-4 col-4"></div>
                    </div>
                    <div className="row">
                        <div className="box36 col-lg-4 col-md-4 col-4"></div>
                        <div className="box37 col-lg-8 col-md-8 col-8"></div>
                    </div>
                    <div className="row">
                        <div className="box38 col-lg-4 col-md-4 col-4"></div>
                        <div className="box39 col-lg-4 col-md-4 col-4"></div>
                        <div className="box40 col-lg-4 col-md-4 col-4"></div>

                    </div>
                </div>
                <div><img className="handsome" src="\images\handsomeldka.png" /></div>
                <div><img className="oranagegirl" src="\images\girlbanner.png" /></div>
                <div><img className="text30" src="\images\Administrative Assistant.png" /></div>
                <div><img className="zigzag" src="\images\zigzag.png" /></div>
                <div><img className="businesswomen" src="\images\business-woman 1.png" /></div>
                <div><img className="text31" src="\images\Science & Environment.png"></img></div>
                <div><img className="happygirl" src="\images\happy-beautiful 1.png" /></div>
                <div><img className="text32" src="\images\Business & Management.png" /></div>
                <div><img className="text33" src="\images\Marketing & Advertising.png" /></div>
                <div><img className="text34" src="\images\chutku.png" /></div>
            </div>
        </div>
    )
}
export default Login;