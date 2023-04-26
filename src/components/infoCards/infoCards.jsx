import Card from "../card/card";
import ContentItem from "../contentItem/contentItem";
import "./infoCards.scss";

const InfoCards = ({
    cardInfo = [],
    id="",
}) => {
    return (
        <div className="info-cards-container" id={id}>
            {cardInfo.map((el, i) => (
                <Card 
                    key={i}
                    className="info-cards"
                >
                    <ContentItem 
                        img={el.img}
                        description={el.description}
                        title={el.title}
                    />
                </Card>
            ))}
        </div>
    )
}

export default InfoCards;