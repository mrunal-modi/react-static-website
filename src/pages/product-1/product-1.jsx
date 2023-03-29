import "./product-1.scss";
import ContentItem from "../../components/content-item/content-item";
// import Title from "../../components/title/title";
import { product1Config } from "../../config/product-1-config";

const Product1 = () => {
    return (

        <div className="about-us" id="about-us">
            <div className="container">
                {/* <Title title="About Us" /> */}
                <div className="about-us-content">

                    {product1Config.map((el, i) => (
                        <ContentItem img={el.image} description={el.description} isLft={i%2 === 1} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product1;