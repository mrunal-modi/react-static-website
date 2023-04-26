
const Home = {
    "path": "/",
    "navbarLinkLabel": "Home",
    "data": {},
    "view": {
        "page-banner": {
            "component": "Banner",
            "img": "/images/home-banner.jpg",
            "supTitle": "Learn Anywhere, Learn Anytime",
            "title": "DevStack Tutor",
            "subtitle":  "Learn Anywhere, Learn Anytime",
            "text": "Aute adipisicing cupidatat eiusmod id Lorem sint deserunt et veniam ea cupidatat ipsum minim reprehenderit. Lorem irure proident voluptate dolore Lorem incididunt pariatur. Elit enim nostrud irure dolore fugiat enim eiusmod sunt eu amet.",
            "actionButtons": [
                {
                    "label": "Hire",
                    "href": "#contact-us",
                    // "style": {"width": 400}
                }
            ],
            "bgColor": "#ffc300",
            "textColor": "#fff",
            // "height": "800px",
            // "setImageAsBackground": true,
            // "rtl": true 
        },
        "section-1": {
            "component": "ContentItem",
            "img": "/images/home-banner.jpg",
            "description": "Enim in fugiat reprehenderit incididunt est sunt tempor deserunt excepteur quis consequat nulla nostrud ex. In duis eiusmod do quis est in sit commodo consequat eu aliqua duis deserunt. Exercitation dolor mollit amet in sint do mollit magna. Lorem sunt sint aute incididunt aute. Ut consectetur non ipsum velit eu. Proident tempor esse voluptate consequat aliquip mollit. Aliquip labore consequat amet dolore minim reprehenderit amet tempor dolor incididunt nisi labore qui.",
            "title": "MM",
            "rtl": true,
        },
        "section-2": {
            "component": "HeroContent",
            "description": "Enim in fugiat reprehenderit incididunt est sunt tempor deserunt excepteur quis consequat nulla nostrud ex. ",
            "title": "ll",
            "bgColor": "#ffc300",
            "textColor": "#fff",
        },
        "section-3": {
            "component": "ContentItem",
            "img": "/images/home-banner.jpg",
            "description": "Enim in fugiat reprehenderit incididunt est sunt tempor deserunt excepteur quis consequat nulla nostrud ex. In duis eiusmod do quis est in sit commodo consequat eu aliqua duis deserunt. Exercitation dolor mollit amet in sint do mollit magna. Lorem sunt sint aute incididunt aute. Ut consectetur non ipsum velit eu. Proident tempor esse voluptate consequat aliquip mollit. Aliquip labore consequat amet dolore minim reprehenderit amet tempor dolor incididunt nisi labore qui.",
            "title": "MM",
        },
        "info-cards": {
            "component": "InfoCards",
            "sectionTitle": "Services",
            "cardInfo": [
                {
                    "title": "MM",
                    "img": "/images/home-banner.jpg",
                    "description": "Enim in fugiat reprehenderit ",
                },
                {
                    "title": "MM",
                    "img": "/images/home-banner.jpg",
                    "description": "Enim in fugiat reprehenderit ",
                },
                {
                    "title": "MM",
                    "img": "/images/home-banner.jpg",
                    "description": "Enim in fugiat reprehenderit incididunt ",
                }
            ]
        },

        "our-team": {
            "component": "Team",
            "sectionTitle": "Our team",
            "teamInfo": [
                {
                    "image": "/images/ImageTeamMember1.jpeg",
                    "fullName": "Mrunal Modi",
                    "role": "Founder | Student"
                },
                {
                    "image": "/images/ImageTeamMember2.jpeg",
                    "fullName": "Lalit Sharma",
                    "role": "Founder | Tutor"
                },
                {
                    "image": "/images/logo.png",
                    "fullName": "You",
                    "role": "You | Student"
                },
                {
                    "image": "/images/ImageTeamMember1.jpeg",
                    "fullName": "Mrunal Modi",
                    "role": "Founder | Student"
                },
                {
                    "image": "/images/ImageTeamMember2.jpeg",
                    "fullName": "Lalit Sharma",
                    "role": "Founder | Tutor"
                },
                {
                    "image": "/images/logo.png",
                    "fullName": "You",
                    "role": "You | Student"
                }
            ],
            "bgColor": "#ffc300",
            "textColor": "#fff"
        },
        "contact-us": {
            "component": "Form",
            "sectionTitle": "Contact Us",
            "inputs": [
                {
                    "label": "Full Name",
                    "type": "text",
                    "validation": "required",
                    "name": "full_name",
                    "placeholder": "Full Name",
                    "width": "50%"
                },
                {
                    "label": "Phone",
                    "type": "number",
                    "name": "phone",
                    "placeholder": "Eg. 888 888 8888",
                    "width": "50%"
                },
                {
                    "label": "Email",
                    "type": "text",
                    "validation": "email",
                    "name": "email",
                    "placeholder": "jhone@example.com",
                },
                {
                    "label": "Describe your query",
                    "type": "textarea",
                    "placeholder": "Describe your query (optional)",
                    "name": "description"
                }
            ],
            // "bgColor": "#ffc300",
            // "textColor": "#fff",
            // "submitButtonStyle": "primary", //primary, warning, info, danger
            //title="Contact us"
        }
    }
};

export default Home;