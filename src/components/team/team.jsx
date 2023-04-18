import "./team.scss";
import UserProfilePic from "../userProfilePic/userProfilePic";

const Team = ({
    teamInfo,
}) => {
    return (

        <div
            className="team"
        >
            {teamInfo.map((el, i) => (
                <UserProfilePic key={i}
                    src={el.image}
                    fullName={el.fullName}
                    designation={el.role} />
            ))}
        </div>
    )
}

export default Team;