import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div id="FooterContainer">
      <div id="FooterWrapper">
        <h1 id="Logo">Krashang Kumar</h1>
        <div id="SocialMediaIcons">
          <a
            id="SocialMediaIcon"
            href="https://www.linkedin.com/in/krashang-kumar/"
            target="display"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* <a
            id="SocialMediaIcon"
            href="javascript:void(0)"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a> */}
          <a id="SocialMediaIcon" href="mailto:krashang.kumar2001@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div id="Copyright">
          &copy; {new Date().getFullYear()} Krashang Kumar. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
