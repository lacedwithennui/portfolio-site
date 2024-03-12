import React from "react";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";
import Card, { CardWidthType, VerticalCardView } from "../components/Card.tsx";

export default function Home() {
    return(
        //notes - fewer words solid background to shift focus toward content\
        //find a middle ground
        <>
            <Hero gradientStyle={HeroGradientStyle.BlueLavender} title="Hazel Belmont" />
            <VerticalCardView>
                <Card title="Who Am I?" cardWidthType={CardWidthType.Full}>
                    I am Hazel Belmont, a student and computer science hobbyist. I am pursuing a Bachelor's Degree in Computer Science 
                    with a concentration in Software Engineering at Virginia Commonwealth University. I have 8 years of overall experience in
                    programming and markup languages, with 6 years of Java, 8 years of HTML, 8 years of CSS, 4 years of JS, and 4 years of ReactJS.
                    I gained this experience through FIRST&reg; Robotics, internships, paid work, and personal projects. My skills are not only restricted
                    to programming - they also reside in Adobe Creative Suite, Google Workspace, Microsoft Office, and more.
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
                <Card title="Technical Outline" cardWidthType={CardWidthType.Full}>
                    <table>
                        <tr>
                            <th>Language/Framework</th>
                            <th>Relevant Projects</th>
                            <th>Years of Experience</th>
                        </tr>
                        <tr>
                            <td>Java</td>
                            <td className="middleTD">
                                Worked on 7 different FIRST&reg; Robotics Competition and 2 FIRST&reg; Tech Challenge robots over 6 years. Created a custom Java Spark API to handle web requests
                                and route them to MongoDB CRUD operations <LinkToPortfolio />. Excel work schedule to Google Calendar event converter <LinkToPortfolio />.
                            </td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>Simplified “just Tweet” program, Google Sheet assignment tracker with Canvas and PowerSchool integration</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>ReactJS</td>
                            <td>Personal brand website <LinkToPortfolio />, design history notebook <LinkToPortfolio />.</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>React Native</td>
                            <td>Local bus tracker <LinkToPortfolio />, Excel work schedule to Google Calendar converter <LinkToPortfolio />.</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>Personal brand websites <LinkToPortfolio />, corporate website modules.</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>CSS/SCSS</td>
                            <td>Personal brand websites <LinkToPortfolio />, design history notebook <LinkToPortfolio />, corporate website modules.</td>
                            <td>8/1 Respectively</td>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td>FRC match countdown dashboard for competition use <LinkToPortfolio />, WordPress modules.</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>Personal brand website <LinkToPortfolio />, Excel work schedule to Google Calendar converter <LinkToPortfolio />, corporate website modules.</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Swift/XCode</td>
                            <td>Personal sandboxing projects, local bus tracker, Excel work schedule to Google Calendar converter (macOS version)</td>
                            <td>2</td>
                        </tr>
                    </table>
                </Card>
            </VerticalCardView>
       </>
    );
}

function LinkToPortfolio() {
    return(
        <>
            (<a href="/portfolio">see portfolio page</a>)
        </>
    );
}