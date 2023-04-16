import ContentItem from "../contentItem/contentItem"


const HeroContent = ({ 
    id, 
    className = "", 
    title, 
    description,
    bgColor,
    textColor
}) => {
    return (
        <ContentItem
            id={id}
            title={title}
            description={description}
            className = {className}
            bgColor={bgColor}
            textColor={textColor}
        />
    )
}

export default HeroContent;