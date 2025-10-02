import React from "react";
import { ABlank, paths } from "../components/util.tsx";
import Card, { CardOutButton, HorizontalCardView } from "../components/Card.tsx";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";
import { Helmet } from "react-helmet-async";

export default function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Hazel Belmont | Portfolio</title>
                <meta name="description" content="Discover projects made by Hazel, like DASHBoard, Mighty Pirates, and MongoAPI." />
            </Helmet>
            <Hero title="Portfolio"></Hero>
            <HorizontalCardView title="Professional Programming Projects" containerClasses="primaryCardViewColoration">
                <Card
                    title="Invoicing Agent"
                    icons={
                        <>
                            <img src={paths.images + "n8n-logo.svg"} alt="n8n logo" className="cardTitleImage" />
                            <img src={paths.images + "javascript-logo.svg"} alt="JavaScript logo" className="cardTitleImage" />
                            <img src={paths.images + "quickbooks-logo.svg"} alt="QuickBooks logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "mari-logo.svg"} href="https://mari.com">
                            Go to MARi
                        </CardOutButton>
                    }>
                    The Invoicing Agent is an AI agent accountant built in <ABlank href="https://n8n.io">n8n Agent Builder</ABlank> that compiles
                    payroll and timesheet data into a labor distribution for each pay period in a given month, then creates a
                    single-customer monthly invoice based on the labor distribution. The agent interacts directly with Intuit QuickBooks,
                    QuickBooks Time, Google Drive, and Google Sheets to significantly reduce costs and improve cashflow.
                </Card>
                <Card
                    title="Software Tour"
                    icons={
                        <>
                            <img src={paths.images + "react-logo.svg"} alt="ReactJS logo" className="cardTitleImage" />
                            <img src={paths.images + "typescript-logo.svg"} alt="TypeScript logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "mari-logo.svg"} href="https://mari.com">
                            Go to MARi
                        </CardOutButton>
                    }>
                    The software tour project is an all-in-one ReactJS component that can be added to a page to display a step-by-step walkthrough
                    of page features using tooltips and modals. Tours can be edited in place using the custom visual editor, or written as JSON for
                    more technical users. Due to security constraints, this project was made using only base ReactJS and TypeScript features with no
                    additional Node modules, and is therefore extremely lightweight and portable. Development on this project was done solo during my
                    2024 summer position with MARi.
                </Card>
                <Card
                    title="Customer Status Tracker"
                    icons={
                        <>
                            <img src={paths.images + "servicenow-logo.svg"} alt="ServiceNow logo" className="cardTitleImage" />
                            <img src={paths.images + "javascript-logo.svg"} alt="JavaScript logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.icons + "out.png"} href="https://allpointsbroadband.com">Go to APB</CardOutButton>
                    }>
                    The Customer Status Tracker is a custom ServiceNow application for <ABlank href="https://allpointsbroadband.com">All Points Broadband</ABlank>
                    {" "}built with server-side and client-side JavaScript that allows
                    various teams across the company to track a service location's status. This app simplifies workflows in legal, customer service,
                    and site acquisition, providing a GUI for these teams to easily aggregate and modify customer data using individual and bulk
                    operations.
                </Card>
                <Card
                    title="WordPress Plugin"
                    icons={
                        <>
                            <img src={paths.images + "php-logo.png"} alt="PHP logo" className="cardTitleImage" />
                            <img src={paths.images + "wordpress-logo.svg"} alt="WordPress logo" className="cardTitleImage" />
                            <img src={paths.images + "elementor-logo.svg"} alt="Elementor logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.icons + "out.png"} href="https://allpointsbroadband.com">Go to APB</CardOutButton>
                    }>
                    During my 2025 internship at All Points Broadband, I was solely responsible
                    for creating a custom WordPress plugin using PHP to add multiple elements to Elementor. One integrates with Advanced Custom Fields
                    (ACF), a common WordPress plugin, to allow the marketing team to make dynamic edits to the FAQ page. Another allows site users 
                    to search for their postal code to identify whether or not All Points Broadband services their location. These elements are still 
                    in use on the site today at <ABlank href="https://allpointsbroadband.com">allpointsbroadband.com</ABlank>.
                </Card>
            </HorizontalCardView>
            <HorizontalCardView title="Personal Programming Projects" containerClasses="secondaryCardViewColoration">
                <Card
                    title="Mighty Pirates"
                    titleLink="https://github.com/lacedwithennui/mightypirates"
                    icons={
                        <>
                            <img src={paths.images + "react-logo.svg"} alt="ReactJS logo" className="cardTitleImage" />
                            <img src={paths.images + "javascript-logo.svg"} alt="JavaScript Logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "github-logo.png"} href="https://github.com/lacedwithennui/mightypirates">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    The Mighty Pirates website is a dynamic post-based ReactJS site made with JSX that interfaces with a custom MongoDB API
                    (see the next card) to serve an updatable set of content. The site also features a secure login system to access the
                    post creation interface. The site is publicly viewable at{" "}
                    <ABlank href="http://mp.hpbelmont.com">
                        mp.hpbelmont.com
                    </ABlank>
                    .
                </Card>
                <Card
                    title="MongoAPI"
                    titleLink="https://github.com/lacedwithennui/mongoapi"
                    icons={
                        <>
                            <img src={paths.images + "java-logo.png"} alt="Java logo" className="cardTitleImage" />
                            <img src={paths.images + "mongodb-logo.png"} alt="MongoDB logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "github-logo.png"} href="https://github.com/lacedwithennui/mongoapi">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    MongoAPI is a custom Java Spark API that handles requests from The Mighty Pirates website (see the previous card) and
                    returns or adds data from/to a MongoDB cluster. It includes secure features such as SHA-3 salted password hashing and
                    RSA encryption to protect user data and allow users to log in to the post creation interface of The Mighty Pirates site.
                </Card>
                <Card
                    title="FRC Pit Clock"
                    titleLink="https://github.com/lacedwithennui/pit-clock"
                    icons={<img src={paths.images + "php-logo.png"} alt="PHP logo" className="cardTitleImage" />}
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "github-logo.png"} href="https://github.com/lacedwithennui/pit-clock">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    FRC Pit Clock is a PHP tool that shows FRC teams everything they need to know about an event. Pit clock displays any
                    team's match schedule which includes all alliance members and the team's alliance and driver station position for each
                    match; a summary of the rank and record of the team, a large bumper color readout for the next match, and a countdown to
                    the queueing time for the next match. FRC Team 5587 won the Judges' Award at the 2024 Ashland District Competition in large
                    part due to this tool.
                </Card>
                <Card
                    title="React FRC Pit Clock"
                    titleLink="https://github.com/lacedwithennui/pit-clock-react"
                    icons={<img src={paths.images + "react-logo.svg"} alt="ReactJS logo" className="cardTitleImage" />}
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "github-logo.png"} href="https://github.com/lacedwithennui/pit-clock-react">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    React FRC Pit Clock builds on the PHP version in the previous card, with notable additions such as a documented, readable,
                    and safe codebase, calculations for who will win the team's next match, and dynamic state handling that ensures that there
                    are no extraneous or unnecessary network requests. It is publicly available at <ABlank href="http://clock.hpbelmont.com">clock.hpbelmont.com</ABlank> and
                    can be used by any FRC team at any event. Team 5587 won the Judges' Award at the 2024 Ashland District Competition in large
                    part due to this tool.
                </Card>
                <Card
                    title="DASHBoard"
                    titleLink="https://github.com/lacedwithennui/dashnative"
                    icons={
                        <>
                            <img src={paths.images + "react-native-logo.svg"} alt="React Native logo" className="cardTitleImage" />
                            <img src={paths.images + "javascript-logo.svg"} alt="JavaScript logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "github-logo.png"} href="https://github.com/lacedwithennui/dashnative">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    DASHBoard is a very quick React Native with JSX project made to replace the Alexandria Transit Company's DASHTracker
                    app, which has several UI/UX pitfalls, mainly due to its lack of simplicity. DASHBoard embraces simplicity by introducing
                    <i> favorite buses</i>, which the user chooses. Because the app is extremely lightweight, it cuts down on loading times and 
                    allows bus arrivals to display more quickly.
                </Card>
                <Card
                    title="Hazel Belmont"
                    titleLink="https://github.com/lacedwithennui/portfolio-site"
                    icons={
                        <>
                            <img src={paths.images + "react-logo.svg"} alt="ReactJS logo" className="cardTitleImage" />
                            <img src={paths.images + "typescript-logo.svg"} alt="TypeScript logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "github-logo.png"} href="https://github.com/lacedwithennui/portfolio-site">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    The website you're reading this from was written in ReactJS with JSX and TypeScript, and it is open source. The website
                    (as you probably know) is available at <a href="/">hpbelmont.com</a>. All work is from scratch with no use of third-party
                    UI libraries like Bootstrap and Tailwind, and is based on things I have learned from past projects that use ReactJS, JSX,
                    CSS, SCSS, and TypeScript.
                </Card>
            </HorizontalCardView>
            <HorizontalCardView
                title="Other Projects"
                containerClasses="primaryCardViewColoration"
                internalClasses="tallHorizontalCardView">
                <Card
                    title="Boat Design"
                    titleLink="https://communities.sname.org/designcompetition/home"
                    icons={
                        <>
                            <img src={paths.images + "onshape-logo.webp"} alt="Onshape Logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.icons + "out.png"} href="https://communities.sname.org/designcompetition/home">
                            SNAME BDC
                        </CardOutButton>
                    }
                >
                    As Team Lead of The Mighty Pirates, I led CAD efforts in Onshape and calculation efforts in
                    Google Sheets in order to design a 6-foot-by-4-foot steel boat. Of more than 20 teams who submitted designs for the competition, only four got their boats
                    built by the Newport News Shipbuilding company, and after multiple races, our boat – the Swashbuckler – was named the winner of the 2024 Boat Design Competition.
                    The Mighty Pirates Design History Notebook is available via my React App <ABlank href="https://mp.hpbelmont.com">here.</ABlank>
                    <br /><br />
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <img src={paths.images + "mp-sitting.jpg"} alt="The Swashbuckler - The Mighty Pirates' boat built by the SNAME Student Section of the Newport News Shipbuilding Company" title="The Swashbuckler - The Mighty Pirates' boat built by the SNAME Student Section of the Newport News Shipbuilding Company" style={{width: "50%", display: "flex"}}/>
                        <img src={paths.images + "mp-winners.png"} alt="The Mighty Pirates Boat Design Team holding the first-prize 'rock trophy.'" title="Hazel holding the first-prize 'rock trophy' with her teammates after The Mighty Pirates Boat Design Team won the competition." style={{width: "50%", display: "flex"}}/>
                    </div>
                </Card>
                <Card
                    title="MARi Whitepapers"
                    titleLink="https://mari.com/resources/"
                    icons={<img src={paths.images + "indesign-logo.svg"} alt="Indesign logo" className="cardTitleImage" />}
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "mari-logo.svg"} href="https://mari.com/resources/">
                            Go to MARi{" "}
                        </CardOutButton>
                    }>
                    During my time at{" "}
                    <ABlank href="https://mari.com">
                        MARi
                    </ABlank>
                    , I developed a set of design guidelines for research whitepapers and applied them to existing documents created by MARi
                    using Adobe InDesign. <br />
                    <br />
                    <img src={paths.images + "mari-whitepaper.png"} width="100%" alt="A screenshot of a PDF that follows the styling guidelines I designed and applied in InDesign." />
                </Card>
                <Card
                    title="Video Editing"
                    titleLink="https://www.youtube.com/embed/videoseries?si=a95AFMCssIADXkI9"
                    icons={
                        <>
                            <img src={paths.images + "premiere-logo.svg"} alt="Premiere Pro logo" className="cardTitleImage" />
                            <img src={paths.images + "after-effects-logo.svg"} alt="AfterEffects logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={paths.images + "youtube-logo.svg"} href="https://www.youtube.com/embed/videoseries?si=a95AFMCssIADXkI9">
                            Open on YouTube
                        </CardOutButton>
                    }>
                    <p>
                        In Adobe Premiere Pro and After Effects, I have edited several videos, including a robot reveal, an animated video for MARi, a set of Kundalini yoga
                        videos, and more. Each video showcases the ability to synchronize visual actions with music and vocal cues,
                        carefully balance audio levels, and create effects that stand out and catch the eye.
                    </p>
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?si=a95AFMCssIADXkI9&amp;controls=0&amp;list=PLqxD45tuUdVo993Wf-zN9g2njhOu470dP"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{border: "none", marginTop: "3vh"}}></iframe>
                </Card>
                {/* <Card
                    title="WPILib VS Code Icons"
                    titleLink=""
                    icons={<img src={illustratorLogo} alt="Adobe Illustrator logo" className="cardTitleImage" />}
                    // cardOutButton={
                    //     <CardOutButton imgSrc={paths.images + "github-logo.png"} href="https://github.com/lacedwithennui/pit-clock">
                    //         Open in GitHub
                    //     </CardOutButton>
                    // }
                > */}
                    {/* <></>
                </Card> */}
            </HorizontalCardView>
        </>
    );
}
