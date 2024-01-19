import React from "react";
export default function Contact() {

    return (
        <>
            <div className="container">
                <div className="body">
                    <div className="row">
                        <div className="col-md-offset-3 col-md-6">
                            <h2>Contact Us</h2>
                            <p>Please feel free to contact us</p>
                            <div id="contact">
                                <form method="POST" action="http://formspree.io/laura@lcmillsconsulting.com">
                                    <div className="form-group">
                                        <label htmlFor="nameInput">Name</label>
                                        <input type="text" className="form-control" name="name" id="nameInput" placeholder="Your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="organisationInput">Organisation</label>
                                        <input type="text" className="form-control" name="organisation" id="organisationInput" placeholder="Organisation" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailInput">Email address</label>
                                        <input type="email" className="form-control" name="email" id="emailInput" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="messageInput">Message</label>
                                        <textarea className="form-control" id="messageInput" name="message" placeholder="Your message" rows="10"></textarea>
                                    </div>
                                    <button className="btn button" type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
