import React from "react";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";
import Card, { CardWidthType, VerticalCardView } from "../components/Card.tsx";
import { Helmet } from "react-helmet-async";

export default function About() {
    return(
        <>
            <Helmet>
                <title>Hazel Belmont | About</title>
                <meta name="description" content="Learn about Hazel's skills and experience." />
            </Helmet>
            <Hero title="Hazel Belmont" />
            <VerticalCardView>
                <Card title="Who Am I?" cardWidthType={CardWidthType.Full}>
                    I am an AI innovator, a full-stack developer, and a student of computer science. I have 10 years of overall experience in
                    programming and markup languages with 8 years of Java, 10 years of HTML, 10 years of CSS, 6 years of JavaScript, 5 years of 
                    TypeScript, and 6 years of ReactJS. 
                </Card>
                <Card title="Skills Sumary" cardWidthType={CardWidthType.Full}>
                    <ul>
                        <li>Years of experience in <b>leadership</b>, team-building, and <b>educating</b> peers and youth in varying fields.</li>
                        <li>Adept with programming languages including but not limited to <b>Java</b>, Python, <b>ReactJS</b>, React Native, <b>HTML</b>, CSS, SCSS, PHP, and <b>JS</b>.</li>
                        <li>Trained in environments including but not limited to <b>Visual Studio Code</b>, XCode, Android Studio, Eclipse, and IntelliJ Idea.</li>
                        <li>Fluent in <b>Adobe Creative Suite</b> tools such as InDesign, Acrobat, Premiere, and Photoshop.</li>
                        <li>Proficient with <b>CAD</b> tools including Onshape, AutoCAD, and Revit.</li>
                        <li>Comfortable in Windows-, macOS-, ChromeOS- and Ubuntu-based systems.</li>
                        <li>Experience troubleshooting hardware- and software-based issues in a wide stack of applications.</li>
                        <li>Experienced in WordPress, <b>AWS EC2, AWS Elastic Beanstalk,</b> and NGINX servers and subsequent network skills such as FTP, SFTP, SSH, and port forwarding.</li>
                        <li>Fluent with both Google Suite and Microsoft Office.</li>
                    </ul>
                </Card>
            </VerticalCardView>
       </>
    );
}