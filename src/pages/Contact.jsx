
const Contact = {
    "path": "/contact",
    "navbarLinkLabel": "Contact",
    "order": 4,
    "data": {},
    "view": {
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

export default Contact;