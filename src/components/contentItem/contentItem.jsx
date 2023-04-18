import { useMemo } from "react";
import "./contentItem.scss";

const ContentItem = ({
    id = "",
    className = "",
    img,
    description,
    rtl,
    title,
    bgColor,
    textColor,
    imgHeight = "auto"
}) => {

    let styles = useMemo(() => {
        let s =  {
            container: {
                backgroundColor: bgColor,
                color: textColor,
                textAlign: !img ? "center" : ""
            },
            img: {
                width: imgHeight ? "auto" : "",
                height: imgHeight
            },
            right: {
                width: !img ? "100%" : "",
                alignItems: !img ? "center" : ''
            }
        };

        return s;
    }, [bgColor, img, imgHeight, textColor])

    return (
        <div
            id={id}
            className={`${className} content section ${rtl ? "lft" : ""}`}
            style={styles.container}
        >
            <div className="container">
                <div className="content-body">
                    {img &&
                        <div className="left">
                            <img src={img} className="img" alt="img" style={styles.img} />
                        </div>
                    }
                    {(title || description) &&
                        <div
                            className="right"
                            style={styles.right}
                        >
                            <h3>
                                {title}
                            </h3>
                            <p>
                                {description}
                            </p>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default ContentItem;