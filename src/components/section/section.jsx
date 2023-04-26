import Title from "../title/title"
import { useMemo } from "react";
import "./section.scss";

const Section = ({
    children,
    className="",
    title,
    id,
    bgColor,
    textColor,
    bgImage
}) => {

    let styles = useMemo(() => {
        let s = {
            background: bgColor,
            color: textColor
        };

        if (bgImage) {
            s = {
                ...s,
                background: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }
        }

        return s;

    }, [bgColor, textColor, bgImage]);

    return (
        <div
            id={id}
            className={`${className} section ${title ? "titled-section" : ""}`}
            style={styles}
        >
            {title &&
                <Title title={title} />
            }
            <div className="section-content container">
                {children}
            </div>
        </div>
    )
}

export default Section;