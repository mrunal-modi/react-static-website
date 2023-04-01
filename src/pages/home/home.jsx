import "./home.scss";
import React from "react";
import Banner from "../../components/banner/banner";
// import OurTeam from "../../components/our-team/our-team";
import ContentItem from "../../components/content-item/content-item";
import { homeContentConfig } from "../../config/home-page-config";

const Home = () => {
    return (
        <div className="landing-page">
            <Banner />
            {/* <OurTeam /> */}
            <div className="about-us-content">
                {homeContentConfig.map((el, i) => (
                    <ContentItem img={el.image} description={el.description} title={el.title} isLft={i % 2 === 0} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Home;
