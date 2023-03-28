import "./content-item.scss";

const ContentItem = ({
    className = "",
    img,
    description,
    isLft
}) => {
    return (
        <div className={`${className} content ${isLft ? "lft" : ""}`}>
            <div className="container">
                <div className="content-body">

                    <div className="left hidden-sm">
                        <img src={img} className="img" alt="img" />
                    </div>
                    <div className="right">
                        <p>
                            {description}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContentItem;