import React from "react";
import Navbar from "../../landing structure/navbar";
import Banner from "../../component/banner/banner";
import Business from "../../component/business";
import Banner2 from "../../component/banner2";
import Community from "../../component/communitycard";
import FindJob from "../../component/rightjob";
import Touch from "../../component/GetTouch";
const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Business />
            <Banner2 />
            <Community />
            <FindJob />
            <Touch />


        </div>)
}
export default LandingPage;