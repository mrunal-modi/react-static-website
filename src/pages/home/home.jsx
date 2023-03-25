import "./home.scss";
import React from "react";
import OurTeam from "../../components/our-team/our-team";
import ContactUsForm from "../../components/contact-us-form/contact-us-form";
import Banner from "../../components/banner/banner";

const Home = () => {
    return (
        <div className="landing-page">

            <Banner />
            <OurTeam />
            <ContactUsForm />
        </div>
    );
};

export default Home;
