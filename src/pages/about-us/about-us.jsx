import "./about-us.scss";
import ContentItem from "../../components/content-item/content-item";
// import Title from "../../components/title/title";
import OurTeam from "../../components/our-team/our-team";
import { aboutUsConfig } from "../../config/about-us-page-config";

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