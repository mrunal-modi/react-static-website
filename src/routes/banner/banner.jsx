import Link from "../../components/link/link";
import { title1, title2, description, bannerImage, buttons, isLft } from "../../config/banner-config";
import "./banner.scss";

const Banner = ({
    className = ""
}) => {
    return (
        <div className={`${className} banner ${isLft ? "lft" : ""}`}>
            {bannerImage && 
            <div className="left hidden-sm">
            <img src={bannerImage} className="bannerImage" alt="bannerImage" />
            </div>}
            <div className="right">
                <h3>
                    {title1}
                </h3>
                <h1>
                    {title2}
                </h1>
                <p>
                    {description}
                </p>
                <div className="btn-container">
                    {buttons.map((el, i) => (
                        <Link className="btn btn-primary" key={i} {...el}>
                            {el.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner;