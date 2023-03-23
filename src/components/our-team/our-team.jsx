import "./our-team.scss";
import UserProfilePic from "../../components/UserProfilePic/UserProfilePic"; 
import { mrunal, lalit } from "../../config/navbar-config";


const OurTeam = ({className}) => {
    return (
        <div className="team" id="team">
            <UserProfilePic
                src={mrunal}
                fullName="Mrunal Modi"
                designation="Founder | Student"
            />
            <UserProfilePic
                src={lalit}
                fullName="Lalit Sharma"
                designation="Founder | Tutor"
            />
        </div>
    )
}

export default OurTeam;