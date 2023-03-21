import "./home.scss";
import React from "react";
import OurTeam from "../../routes/our-team/our-team";
import ContactUs from "../../routes/contact-us/contact-us";
import Banner from "../../routes/banner/banner";

const Home = () => {
    return (
        <div className="landing-page">

            <section id="home">
                <div className="container">
                    <Banner />
                </div>
            </section>
            <section id="team">
                <div className="container">
                    <OurTeam />
                </div>
            </section>
            <section id="contact-us">
                <div className="container">
                    <ContactUs />
                </div>
            </section>
        </div>
    );
};

export default Home;
