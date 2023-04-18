import Card from "../card/card";

const InfoCards = ({
    cardInfo = []
}) => {
    return (
        <div className="info-cards-container">
            {cardInfo.map((el, i) => (
                <Card key={i}>
                    some conent will go here
                </Card>
            ))}
        </div>
    )
}

export default InfoCards;