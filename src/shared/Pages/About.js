import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <Helmet
                    title={"Yunus Taşbaşı || About Page"}
                    meta={[
                        {
                            name: "description",
                            content:
                                "This is Massively, a text-heavy, article-oriented design built around a I have been wanting to try out. Enjoy it :)"
                        },
                        {
                            name: "keywords",
                            content:
                                "html5, css3, responsive, site template, website template About"
                        }
                    ]}
                ></Helmet>

                <div id="about-container" className="container">
                    <div className="content">
                        <h2>About Page</h2>

                        <div className="about-content">
                            <p>
                                MM Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas eget libero ut libero
                                sagittis pharetra. Nullam dolor mauris,
                                vulputate in lacus ac, convallis placerat metus.
                                Curabitur at posuere sem, sed facilisis elit.
                                Morbi sed turpis turpis. Fusce non sem et augue
                                egestas finibus in sed lectus. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit.
                            </p>

                            <div className="our-vision">
                                <h3>OUR VISION</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas eget libero ut
                                    libero sagittis pharetra. Nullam dolor
                                    mauris, vulputate in lacus ac, convallis
                                    placerat metus. Curabitur at posuere sem,
                                    sed facilisis elit. Morbi sed turpis turpis.
                                    Fusce non sem et augue egestas finibus in
                                    sed lectus. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Suspendisse
                                    mollis nec enim eget malesuada. Donec ac
                                    velit risus. Curabitur eget porttitor
                                    libero.
                                </p>
                            </div>

                            <div className="our-mission">
                                <h3>OUR MISSION 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Maecenas eget libero ut
                                    libero sagittis pharetra. Nullam dolor
                                    mauris, vulputate in lacus ac, convallis
                                    placerat metus. Curabitur at posuere sem,
                                    sed facilisis elit. Morbi sed turpis turpis.
                                    Fusce non sem et augue egestas finibus in
                                    sed lectus. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Suspendisse
                                    mollis nec enim eget malesuada. Donec ac
                                    velit risus. Curabitur eget porttitor
                                    libero.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default About;
