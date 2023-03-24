import "./home.scss";
import React from "react";
import OurTeam from "../../components/our-team/our-team";
import ContactUsForm from "../../components/contact-us-form/contact-us-form";
import Banner from "../../components/banner/banner";
import Title from "../../components/title/title";

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
                    <Title title="Our Team" />
                    <OurTeam />
                </div>
            </section>
            <section id="contact-us">
                <div className="container">
                    <Title title="Contact" />
                    <ContactUsForm />
                </div>
            </section>
        </div>
    );
};

export default Home;
