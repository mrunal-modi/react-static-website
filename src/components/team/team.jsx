import "./team.scss";
import UserProfilePic from "../userProfilePic/userProfilePic";
// import { teamInfo } from "../../config/page-config-about-us";
import Title from "../title/title";

const Team = ({
    id,
    className,
    teamInfo,
    title="Our Team",
    bgColor="",
    textColor=""
}) => {
    return (

        <div 
            className="team section" 
            id={id}
            style={{
                backgroundColor: bgColor,
                color: textColor
            }}
        >
            <div className="container">
                <Title title={title} />
                <div className="team-content">
                    {teamInfo.map((el, i) => (
                        <UserProfilePic key={i}
                            src={el.image}
                            fullName={el.fullName}
                            designation={el.role} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;