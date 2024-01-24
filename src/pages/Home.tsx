import React from "react";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";
import Card, { CardWidthType, VerticalCardView } from "../components/Card.tsx";

export default function Home() {
    return(
        <>
            <Hero gradientStyle={HeroGradientStyle.BlueLavender} title="Hazel Belmont" />
            <VerticalCardView>
                <Card title="Who Am I?" cardWidthType={CardWidthType.Full}>
                    I am Hazel Belmont, a student and computer science hobbyist. I am pursuing a Bachelor's Degree in Computer Science 
                    with a concentration in Software Engineering at Virginia Commonwealth University. I have 8 years of overall experience in
                    programming and markup languages, with 6 years of Java, 8 years of HTML, 8 years of CSS, 4 years of JS, and 4 years of ReactJS.
                    However, my skills also reside in Adobe Creative Suite, Google Workspace, Microsoft Office, and more.
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