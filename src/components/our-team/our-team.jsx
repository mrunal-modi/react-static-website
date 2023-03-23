import "./our-team.scss";
import UserProfilePic from "../../components/UserProfilePic/UserProfilePic"; 
import { 
    ImageTeamMember1, 
    ImageTeamMember2,
    ImageTeamMember3, 
    FullNameTeamMember1, 
    FullNameTeamMember2, 
    FullNameTeamMember3, 
    RoleTeamMember1, 
    RoleTeamMember2,
    RoleTeamMember3 
} from "../../config/our-team-config";


const OurTeam = ({className}) => {
    return (
        <div className="team" id="team">
            <UserProfilePic
                src={ImageTeamMember1}
                fullName={FullNameTeamMember1}
                designation={RoleTeamMember1}
            />
            <UserProfilePic
                src={ImageTeamMember2}
                fullName={FullNameTeamMember2}
                designation={RoleTeamMember2}
            />
            <UserProfilePic
                src={ImageTeamMember3}
                fullName={FullNameTeamMember3}
                designation={RoleTeamMember3}
            />
        </div>
    )
}

export default OurTeam;