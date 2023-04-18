import { useEffect, useMemo, useState } from "react";
import Banner from "../components/banner/banner";
import ContentItem from "../components/contentItem/contentItem";
import Team from "../components/team/team";
import SocialContact from "../components/socialContacts/socialContacts";

import * as viewConfig from "../pages";
import { useLocation } from "react-router-dom";
import HeroContent from "../components/heroContent/heroContent";
import Form from "../components/form/form";
import Section from "../components/section/section";
import InfoCards from "../components/infoCards/infoCards";

const PageManager = () => {

    const location = useLocation();
    const [view, setView] = useState(null);
    const [data, setData] = useState(null);
    const [mounted, setMounted] = useState(false);

    const Components = useMemo(() => ({
        "Banner": Banner,
        "ContentItem": ContentItem,
        "Team": Team,
        "Social": SocialContact,
        "HeroContent": HeroContent,
        "Form": Form,
        "InfoCards": InfoCards
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
                if (!Component) return null;
                return (
                    <Section
                        className={view[id].className}
                        title={view[id].sectionTitle}
                        id={view[id].id}
                        bgColor={view[id].bgColor}
                        textColor={view[id].textColor}
                        bgImage={view[id].bgImage}
                    >
                        <Component
                            key={i}
                            {...view[id]}
                        >
                            {view[id].children}
                        </Component>
                    </Section>
                )
            })}
        </div>
    )
}

export default PageManager;