import React from "react";
import Card, {CardOutButton, ExpandCardButton, ExpandableCard, ExpandedCard, HorizontalCardView} from "../components/Card.tsx";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";
import githubLogo from "../assets/images/github-logo.png";
import javaLogo from "../assets/images/java-logo.png";
import reactLogo from "../assets/images/react-logo.svg";
import phpLogo from "../assets/images/php-logo.png";
import mongodbLogo from "../assets/images/mongodb-logo.png";
import indesignLogo from "../assets/images/indesign-logo.svg";
import mariLogo from "../assets/images/mari-logo.svg";
import premiereLogo from "../assets/images/premiere-logo.svg";
import youtubeLogo from "../assets/images/youtube-logo.svg";
import mariWhitepaper from "../assets/images/mari-whitepaper.png";
import illustratorLogo from "../assets/images/illustrator-logo.svg";
import typescriptLogo from "../assets/images/typescript-logo.svg";
import reactNativeLogo from "../assets/images/react-native-logo.svg";
import javascriptLogo from "../assets/images/javascript-logo.svg";

export default function Portfolio() {
    return (
        <>
            <Hero title="Portfolio" gradientStyle={HeroGradientStyle.LavenderBlueGreen}></Hero>
            <HorizontalCardView title="Programming Projects" containerClasses="primaryCardViewColoration">
                <ExpandableCard
                    title="Mighty Pirates"
                    titleLink="https://github.com/lacedwithennui/mightypirates"
                    icons={
                        <>
                            <img src={reactLogo} alt="ReactJS logo" className="cardTitleImage" />
                            <img src={javascriptLogo} alt="JavaScript Logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        // <CardOutButton imgSrc={githubLogo} href="https://github.com/lacedwithennui/mightypirates">
                        //     Open in GitHub
                        // </CardOutButton>
                        <ExpandCardButton cardID="Mighty Pirates"></ExpandCardButton>
                    }>
                    The Mighty Pirates website is a dynamic post-based ReactJS site made with JSX that interfaces with a custom MongoDB API
                    (see the next card) to serve an updatable set of content. The site also features a secure login system to access the
                    post creation interface. The site is publicly viewable at{" "}
                    <a href="http://mp.parkerdaletech.com" target="_blank" rel="noreferrer">
                        mp.parkerdaletech.com
                    </a>
                    .
                </ExpandableCard>
                <Card
                    title="MongoAPI"
                    titleLink="https://github.com/lacedwithennui/mongoapi"
                    icons={
                        <>
                            <img src={javaLogo} alt="Java logo" className="cardTitleImage" />
                            <img src={mongodbLogo} alt="MongoDB logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={githubLogo} href="https://github.com/lacedwithennui/mongoapi">
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
                    icons={<img src={phpLogo} alt="PHP logo" className="cardTitleImage" />}
                    cardOutButton={
                        <CardOutButton imgSrc={githubLogo} href="https://github.com/lacedwithennui/pit-clock">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    FRC Pit Clock is a PHP tool that shows FRC teams everything they need to know about an event. Pit clock displays any
                    team's match schedule which includes all alliance members and the team's alliance and driver station position for each
                    match; a summary of the rank and record of the team, a large bumper color readout for the next match, and a countdown to
                    the queueing time for the next match.
                </Card>
                <Card
                    title="DASHBoard"
                    titleLink="https://github.com/lacedwithennui/dashnative"
                    icons={
                        <>
                            <img src={reactNativeLogo} alt="React Native logo" className="cardTitleImage" />
                            <img src={javascriptLogo} alt="JavaScript logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={githubLogo} href="https://github.com/lacedwithennui/dashnative">
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
                            <img src={reactLogo} alt="ReactJS logo" className="cardTitleImage" />
                            <img src={typescriptLogo} alt="TypeScript logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={githubLogo} href="https://github.com/lacedwithennui/portfolio-site">
                            Open in GitHub
                        </CardOutButton>
                    }>
                    The website you're reading this from was written in ReactJS with JSX and TypeScript, and it is open source. The website
                    (as you probably know) is available at <a href="/">parkerdaletech.com</a>. All work is from scratch with no outside input,
                    and is based on things I have learned from past projects that use ReactJS, JSX, CSS, SCSS, and TypeScript.
                </Card>
            </HorizontalCardView>
            <HorizontalCardView
                title="Other Projects"
                containerClasses="secondaryCardViewColoration"
                internalClasses="tallHorizontalCardView">
                <Card
                    title="MARi Whitepapers"
                    titleLink="https://mari.com/resources/"
                    icons={<img src={indesignLogo} alt="Indesign logo" className="cardTitleImage" />}
                    cardOutButton={
                        <CardOutButton imgSrc={mariLogo} href="https://mari.com/resources/">
                            Go to MARi{" "}
                        </CardOutButton>
                    }>
                    During my time at{" "}
                    <a href="https://mari.com" target="_blank" rel="noreferrer">
                        MARi
                    </a>
                    , I developed a set of design guidelines for research whitepapers and applied them to existing documents created by MARi
                    using Adobe InDesign. <br />
                    <br />
                    <img src={mariWhitepaper} width="100%" alt="A screenshot of a PDF that follows the styling guidelines I designed and applied in InDesign." />
                </Card>
                <Card
                    title="Video Editing"
                    titleLink="https://www.youtube.com/embed/videoseries?si=a95AFMCssIADXkI9"
                    icons={
                        <>
                            <img src={premiereLogo} alt="Premiere Pro logo" className="cardTitleImage" />
                        </>
                    }
                    cardOutButton={
                        <CardOutButton imgSrc={youtubeLogo} href="https://www.youtube.com/embed/videoseries?si=a95AFMCssIADXkI9">
                            Open on YouTube
                        </CardOutButton>
                    }>
                    <p>
                        In Adobe Premiere Pro, I have edited several videos, including an animated video for MARi, a set of Kundalini yoga
                        videos, and more. Each video showcases the ability to synchronize visual actions with music and vocal cues,
                        carefully balance audio levels, and create minute but noticable effects.
                    </p>
                    <iframe
                        src="https://www.youtube.com/embed/videoseries?si=a95AFMCssIADXkI9&amp;controls=0&amp;list=PLqxD45tuUdVo993Wf-zN9g2njhOu470dP"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{border: "none"}}></iframe>
                </Card>
                <Card
                    title="WPILib VS Code Icons"
                    titleLink="https://github.com/lacedwithennui/pit-clock"
                    icons={<img src={illustratorLogo} alt="Adobe Illustrator logo" className="cardTitleImage" />}
                    // cardOutButton={
                    //     <CardOutButton imgSrc={githubLogo} href="https://github.com/lacedwithennui/pit-clock">
                    //         Open in GitHub
                    //     </CardOutButton>
                    // }
                >
                    <></>
                </Card>
            </HorizontalCardView>
            <ExpandedCard />
        </>
    );
}
