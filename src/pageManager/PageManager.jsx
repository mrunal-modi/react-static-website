import { useEffect, useMemo, useState } from "react";
import Banner from "../components/banner/banner";
import ContactUsForm from "../components/contactUsForm/contactUsForm";
import ContentItem from "../components/contentItem/contentItem";
import Dropdown from "../components/dropdown/dropdown";
import Logo from "../components/logo/logo";
import Team from "../components/team/team";
import SocialContact from "../components/socialContacts/socialContacts";
import UserProfilePic from "../components/userProfilePic/userProfilePic";

import * as viewConfig from "../pages";
import { useLocation } from "react-router-dom";

const PageManager = () => {

    const location = useLocation();
    const [view, setView] = useState(null);
    const [data, setData] = useState(null);
    const [mounted, setMounted] = useState(false);

    const Components = useMemo(() => ({
        "Banner": Banner,
        "ContactUsForm": ContactUsForm,
        "ContentItem": ContentItem,
        "Team": Team,
        "Social": SocialContact
    }), []);

    useEffect(() => {
        let v = Object.values(viewConfig).find(el => el.path === location.pathname);
        if (v) {
            setView(v.view);
            setData(v.data);
        }
        setMounted(true);
    }, [location]);

    return (
        <div className="page-manager">
            {(mounted && !view) &&
                <h1 className="text-center">
                    404 Not Found
                </h1>
            }
            {(mounted && view) && Object.keys(view).map((id, i) => {
                let Component = Components[view[id]["component"]];
                if(!Component) return null;
                return <Component
                    key={i}
                    {...view[id]}
                    id={id.toLowerCase()}
                >
                    {view[id].children}
                </Component>
            })}
        </div>
    )
}

export default PageManager;