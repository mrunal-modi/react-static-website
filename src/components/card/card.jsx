// import Box from "@material-ui/core/Box";
// import styled from "styled-components";
import "./card.scss";

const Card = ({
    children
}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card;