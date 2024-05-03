import ArrowUp from "../ArrowUp";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeroSocialMedia from "../hero/HeroSocialMedia";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contactContainer">
        <div className="contactWrapper">
          <div className="sectionTexts">.CONTACT</div>
          <div className="contactTexts">
            <div className="infoWrapper">
            <FontAwesomeIcon icon={faWhatsapp} className="icons" size="2x"/>
            <span className="info">+90 5536249633</span>
            </div>
            <div className="infoWrapper">
            <FontAwesomeIcon icon={faEnvelope} className="icons" size="2x"/>
            <span className="info"> hasimgorucu@gmail.com</span>
            </div>
            <HeroSocialMedia/>
          </div>
          
        </div>
      <ArrowUp />

      </div>

    </section>
  );
}

export default Contact;
