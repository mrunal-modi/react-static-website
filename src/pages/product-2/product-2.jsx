import "./product-2.scss";
import ContentItem from "../../components/content-item/content-item";
// import Title from "../../components/title/title";
import { product2Config } from "../../config/product-2-config";

const Product2 = () => {
    return (

        <div className="about-us" id="about-us">
            <div className="container">
                {/* <Title title="About Us" /> */}
                <div className="about-us-content">

                    {product2Config.map((el, i) => (
                        <ContentItem img={el.image} description={el.description} isLft={i%2 === 1} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product2;