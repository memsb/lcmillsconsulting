import React from "react";

export default function Home() {

    return (
        <>
            <div id="top">
                <div className="container section">
                    <p id="tag-line">Whether you want to educate your firm on best practices for approaching directories submissions, need help with writing the submissions themselves, or are looking for in-depth analysis of your results that will give you a competitive advantage, I'm here to share my unique experience with you.</p>
                </div>
            </div>
            <div id="middle">
                <div className="container section">
                    <div className="row">
                        <div className="summary col-md-4">
                            <h3>Submission writing & review</h3>
                            <p>Working with your practices to write up a full directories submission or providing review and feedback on the document your internal team has put together</p>
                            <p><a className="btn btn-lg button" href="services.html#writing" role="button">MORE INFO</a></p>
                        </div>
                        <div className="summary col-md-4">
                            <h3>Best Practice Education</h3>
                            <p>Seminars or webinars to address anyone with a stake in the directories process – from partners to staff. Frank and informative feedback on how to best master the process.</p>
                            <p><a className="btn btn-lg button" href="services.html#best-practices" role="button">MORE INFO</a></p>
                        </div>
                        <div className="summary col-md-4">
                            <h3>Performance Analysis</h3>
                            <p>Examine your results and feedback (including your Chambers Unpublished Report) to gain unique insight into the health of your rankings and performance.</p>
                            <p><a className="btn btn-lg button" href="services.html#submissions" role="button">MORE INFO</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="lower" className="container section">
                <div className="row">
                    <div className="laura col-lg-6">
                        <div className="col-lg-4">
                            <img src="img/headshot.jpg" alt="profile" />
                        </div>
                        <div id="about" className="col-lg-8">
                            <h3>About</h3>
                            <h4>Laura Mills</h4>
                            <p>I'm the most recent past editor of the Chambers USA Guide. I'd love to share my experience and insight with you and your firm to help improve your performance in legal directories.</p>
                        </div>
                    </div>
                    <div className="services col-lg-6">
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-10">
                            <h3>OUR SERVICES</h3>
                            <ul className="fas">
                                <li><a href="services.html#writing">Submission writing</a></li>
                                <li><a href="services.html#best-practices">Best practice seminars</a></li>
                                <li><a href="services.html#submissions">Submission/practice deep-dive</a></li>
                                <li>
                                    <a href="services.html#unpublished">Making the most from your Chambers Unpublished report</a>
                                </li>
                                <li><a href="services.html#copyediting">Copyediting/Writing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container"></div>
        </>
    );
}