import React, { useEffect } from "react";
import './banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div className="d-flex bannerbg">
            <div className="mt-5">
                <div >
                    <div>
                        <img src="images\group.png" className="image mb-5"></img>
                    </div>
                    <div className="text">
                        <h1>Welcome to your <br />
                            <span className="banner">proffesional</span> community</h1>
                        <img src="images\Join us your professional community.png" />
                    </div>
                    <div className="margin">
                        <div className='mb-4'>
                            <div >
                                <input class='input5' />
                            </div>
                            <div className="icon "><i class="bi bi-person"></i></div>
                            <div className="line">
                                <img src="\images\line.png" />
                            </div>
                            <div className="mail">
                                <p>aaru@gamil.com</p>
                            </div>
                        </div>
                        <div>
                            <div >
                                <input type="email" class="input5" />
                            </div>
                            <div className="icon"><img src="\images\Vector.png" /></div>
                            <div className="line">
                                <img src="\images\line.png" />
                            </div>
                            <div className="password">
                                <p>********</p>
                            </div>
                        </div>
                        <div className="my-4 " >
                            <img className="recover" src="images\Recover Password _.png" />
                        </div>
                        <div className="mb-4 text-center " >
                            <button className='bannerbtn p-2 ' type="submit">Sign in <i class="bi bi-box-arrow-in-right"></i> </button>

                        </div>
                        <div className="mb-4" style={{ marginLeft: "200px" }}>or</div>
                        <div className=" text-center">
                            <button className=' bannerbtn1 p-2 ' type="submit">Sign in with Gmail <i class="bi bi-envelope"></i> </button>

                        </div>
                    </div>


                </div>
            </div>
            <div className=" column2">
                <div className="d-flex">
                    <div className="man">

                        <div className="box1 mb-3 mt-5" ><img className="img1" src="images\medium-shot-happy-man-smiling-removebg-preview 1.png" /></div>

                        <div className="box2"><img className="img2" src="images\girlbanner.png" /></div>
                    </div>
                    <div className="man1">
                        <div className="box3" mb-3 ><img className="img3" src="images\cutebanner.png" /></div>
                        <div className="box4"><img className="img4" src="images\curlybannner.png" /></div>
                    </div>
                    <div className="man2">
                        <div className="box5 mb-3 mt-5"><img className="img5" src="images\curlybannner.png" /></div>
                        <div className="box6"><img className="img6" src="images\ladkibanner.png" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;