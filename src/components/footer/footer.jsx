import SocialContact from "../social-contacts/social-contacts";
import "./footer.scss";
import {title,description} from "../../config/footer-config";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="main-footer container">
        <div className="mr-auto logo-container">
          <div className="brand-name">
            {title}
          </div>
          <p>{description}</p>
        </div>
        <div className="social">
          <div className="title">
            Follow Us
          </div>
          <SocialContact showNames/>
        </div>
      </section>
      <section className="bottom-bar flex justify-center align-center">
      &copy; Copyright 2023
      {/* <a href="https://www.devstaktutor.com">www.devstacktutor.com</a> */}
      </section>
      
    </footer>
  );
}
