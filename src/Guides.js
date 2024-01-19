import React from "react";
import {
    Link
} from "react-router-dom";

export default function Guides() {

    return (
        <>
            <div className="container">
                <div className="body">
                    <div id="best-practices" className="service">
                        <nav>
                            <h2>Research</h2>
                            <p><a href="/research/index.html">Research Schedules</a></p>

                            <h2>Directories</h2>
                            <p><Link to="/firms">Firms Directory</Link></p>
                            <p><Link to="/lawyers">Lawyers Directory</Link></p>

                            <h2>PDFs</h2>
                            <p><a href="/pdf/index.html">Guide PDFs</a></p>

                            <h2>Guides</h2>
                            <p><a href="/feedback/index.html">Client feedback</a></p>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
