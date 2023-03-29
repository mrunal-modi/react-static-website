import "./about-us.scss";
import ContentItem from "../../components/content-item/content-item";
// import Title from "../../components/title/title";
import { aboutUsConfig } from "../../config/about-us-config";

const AboutUs = () => {
    return (

        <div className="about-us" id="about-us">
            <div className="container">
                {/* <Title title="About Us" /> */}
                <div className="about-us-content">

                    {aboutUsConfig.map((el, i) => (
                        <ContentItem img={el.aboutUsImage} description={el.aboutUsDescription} isLft={i%2 === 1} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;