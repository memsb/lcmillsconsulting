import React from "react";
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import CurrentYear from "./CurrentYear.js";

export default function PageTemplate({ pageContent }) {

    return (
        <>

            <div className="container">
                <div id="logo">
                    <object data="img/LCMills.svg" type="image/svg+xml" width="100px" height="100px">
                        <img src="img/LCMills.jpg" alt="Logo" />
                    </object>
                </div>
                <div id="title">
                    Laura Mills Consulting
                </div>
            </div>

            <div id="menu" className="container">
                <nav className="btn-group btn-group-justified" role="group" aria-label="...">
                    <div className="btn-group" role="group">
                        <Link className="btn btn-default" to="/" role="button">Home</Link>
                    </div>
                    <div className="btn-group" role="group">
                        <Link className="btn btn-default" to="/about" role="button">About</Link>
                    </div>
                    <div className="btn-group" role="group">
                        <Link className="btn btn-default" to="/services" role="button">Services</Link>
                    </div>
                    <div className="btn-group" role="group">
                        <Link className="btn btn-default" to="/blog" role="button">Blog</Link>
                    </div>
                    <div className="btn-group" role="group">
                        <Link className="btn btn-default" to="/contact" role="button">Contact</Link>
                    </div>
                </nav>
            </div>

            <div id="banner">
                <img src="img/banner.jpg" className="img-responsive" alt="Banner" width="100%" height="50%" />
            </div>

            {pageContent}

            <footer>
                <div id="footer-links" className="container">
                    <div className="col-lg-8 contact">
                        <p>L C Mills Consulting</p>
                        <p>Email: <a href="mailto:laura@lcmillsconsulting.com">laura@lcmillsconsulting.com</a></p>
                        <p>Tel (US): +1 (716) 275-8509</p>
                        <p>Tel (UK): +44 (0) 7946167360</p>
                    </div>
                    <div className="col-lg-4 links">
                        <a href="https://www.linkedin.com/in/laura-mills-300ab121"><FontAwesomeIcon icon={faLinkedin} />&nbsp;</a>
                        <a href="https://twitter.com/lcmillsconsult"><FontAwesomeIcon icon={faSquareXTwitter} />&nbsp;</a>
                        <a href="mailto:laura@lcmillsconsulting.com"><FontAwesomeIcon icon={faEnvelopeSquare} />&nbsp;</a>
                        <p>©<CurrentYear /> L C Mills Consulting. </p>
                    </div>
                </div>
            </footer>
        </>
    );
}


