import { useMemo } from "react";
import "./contact.scss";
import { contactInfo } from "../../config/contact-config";

const Contact = ({ showNames = false }) => {

  const social = useMemo(() => 
  contactInfo
  , []);

  return (
    <div className="contacts">
      {social.map((el, i) =>
        <a className="contactIcons" href={el.link} key={i}>
          <i className={`bi bi-${el.icon}`} />{showNames ? el.label : ""}
        </a>
      )}
    </div>
  );
}

export default Contact;