import "./our-team.scss";
import UserProfilePic from "../../components/UserProfilePic/UserProfilePic";
import {
    teamInfo
} from "../../config/our-team-config";


const OurTeam = ({ className }) => {
    return (
        <div className="team" id="team">

            {teamInfo.map((el, i) => (
                <UserProfilePic key={i}
                    src={el.image}
                    fullName={el.fullName}
                    designation={el.role} />

            ))}
        </div>
    )
}

export default OurTeam;