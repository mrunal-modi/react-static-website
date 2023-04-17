import Link from "../link/link";
import "./banner.scss";

const Banner = ({
    id="",
    className = "",
    img = "",
    suptitle = "",
    title = "",
    subtitle = "",
    text = "",
    actionButtons = [],
    rtl,
    bgColor="",
    textColor="",
    imageHeight="100%",
    height="",
    setImageAsBackground=false
}) => {
    return (
        <div 
            id={id} 
            className={`${className} banner section ${rtl ? "rtl" : "ltr"} ${setImageAsBackground ? "bg-img" : ""}`}
            style={{
                backgroundColor: bgColor,
                color: textColor,
                height: height
            }}
        >
            <div className="container">
                <div className="banner-content">
                    {img &&
                        <div className={`left ${setImageAsBackground ? "bg-left" : "hidden-sm"}`}>
                            <img 
                                src={img} 
                                className="bannerImage" 
                                alt="bannerImage" 
                                height={imageHeight}
                            />
                        </div>
                    }
                    <div className="right">
                        {suptitle &&
                            <h3>
                                {suptitle}
                            </h3>
                        }
                        {title &&
                            <h1>
                                {title}
                            </h1>
                        }
                        {subtitle &&
                            <h3>
                                {subtitle}
                            </h3>
                        }
                        {text &&
                            <p>
                                {text}
                            </p>
                        }
                        {actionButtons &&
                            <div className="btn-container">
                                {actionButtons.map((el, i) => (
                                    <Link className="btn btn-primary" key={i} {...el}>
                                        {el.label}
                                    </Link>
                                ))}
                            </div>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Banner;