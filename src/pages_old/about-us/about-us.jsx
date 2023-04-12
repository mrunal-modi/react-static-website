import "./about-us.scss";
import ContentItem from "../../components/contentItem/contentItem";
// import Title from "../../components/title/title";
import OurTeam from "../../components/team/ourTeam";
import { aboutUsConfig } from "../../config/page-config-about-us";

const AboutUs = () => {
    return (


            <div className="container">
                {/* <Title title="About Us" /> */}
                <OurTeam />
                <div className="about-us-content">
                    {aboutUsConfig.map((el, i) => (
                        <ContentItem img={el.image} description={el.description} title={el.title} isLft={i%2 === 1} key={i} />
                    ))}
                </div>
            </div>
    )
}

export default AboutUs;