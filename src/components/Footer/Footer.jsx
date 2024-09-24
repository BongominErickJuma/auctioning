import React from "react";
import footer from "../../js/Footer/footer";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="settings flex-r justify-content-between m-5">
        <div className="language-select-input">
          <select className="form-select">
            <option defaultValue="en-US">English (US)</option>
            <option value="es-ES">Español (España)</option>
            <option value="fr-FR">Français (France)</option>
          </select>
        </div>
        <div className="contact-us">
          <b>do you need help?</b>
          <a href="#" className="ms-2 text-black text-decoration-underline">
            Contact Us
          </a>
        </div>
      </div>
      <div className="footer p-4 pe-5">
        <div className="footer-links">
          {footer.map((item, idx) => (
            <div key={idx} className="footer-item">
              <h3>{item.title}</h3>
              {item.links.map((link, linkIdx) => (
                <div key={linkIdx} className="d-flex align-items-center ">
                  <a href={link.url} className="my-2">
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <hr />
        <div className="legal d-flex align-items-center mt-5">
          <p className="me-2">Policy statement |</p>
          <p className="me-2">Legal policy |</p>
          <p>Do not sell my personal information</p>
        </div>
        <p className="rights">
          &copy; 1999 - {new Date().getFullYear()} Armstrong. Auctioneers, lnc.
          All rights reserved. Various trademarks held by their respective
          owners
        </p>
      </div>
    </div>
  );
};

export default Footer;
