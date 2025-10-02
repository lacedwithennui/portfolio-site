import { Helmet } from "react-helmet-async";
import Card, { CardWidthType, NonScrollingCardView, Technology, TechnologyIcon } from "../components/Card.tsx";
import Hero from "../components/Hero.tsx";
import { paths } from "../components/util.tsx";

export default function Resume() {
    return (
        <>
            <Helmet>
                <title>Hazel Belmont | Résumé</title>
                <meta name="description" content="Learn about Hazel's skills and experience." />
            </Helmet>
            <Hero title="Résumé" />
            <NonScrollingCardView title="Skills">
                <Card title="Frontend">
                    <Technology icon={<TechnologyIcon filename="react-logo.svg" />}>
                        ReactJS
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="typescript-logo.svg" />}>
                        TypeScript
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="html-logo.png" />}>
                        HTML
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="javascript-logo.svg" />}>
                        JavaScript
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="php-logo.png" />}>
                        PHP
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="react-native-logo.svg" />}>
                        React Native
                    </Technology>
                </Card>
                <Card title="Backend">
                    <Technology icon={<TechnologyIcon filename="java-logo.png" />}>
                        Java
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="express-logo.svg" />}>
                        Express.js
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="mongodb-logo.png" />}>
                        MongoDB
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="postgres-logo.svg" />}>
                        PostgreSQL
                    </Technology>
                </Card>
                <Card title="Other">
                    <Technology icon={<TechnologyIcon filename="github-logo.svg" />}>
                        GitHub
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="google-cloud-console-logo.png" />}>
                        Google Cloud Console
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="adk-logo.png" />}>
                        Agent Development Kit
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="n8n-logo.svg" />}>
                        n8n
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="gemini-logo.svg" />}>
                        Gemini API
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="illustrator-logo.svg" />}>
                        Illustrator
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="indesign-logo.svg" />}>
                        InDesign
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="premiere-logo.svg" />}>
                        Premiere Pro
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="jira-logo.svg" />}>
                        Jira
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="servicenow-logo.svg" />}>
                        ServiceNow
                    </Technology>
                </Card>
            </NonScrollingCardView>
            <NonScrollingCardView title="Work Experience" containerClasses="secondaryCardViewColoration" internalClasses="column">
                {/* TODO: Dual-Title Card component to avoid this nasty span stuff */}
                <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}><span>Agentic Workflow Engineer Team Lead at MARi</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>March 2025-Present</i></span>} cardWidthType={CardWidthType.Full}>
                    <ul>
                        <li>Managing a team of interns creating AI agent workflows in cutting-edge frameworks like Google ADK, n8n, and Google AgentSpace.</li>
                        <li>Created AI Agent systems to improve internal workflows using n8n and Google Conversational Agent Builder (formerly DialogflowCX).</li>
                        <li>Created a software tour from scratch in React with TypeScript with version control on GitHub.</li>
                        <li>Provided meaningful feedback to the AI development team regarding UI/UX and general bug fixes using Jira.</li>
                        <li>Led a team of paid interns in testing the MARi SaaS product.</li>
                        <li>Independently made changes to the company website using WordPress.</li>
                        <li>Created a standard format for internal and published documents using InDesign.</li>
                        <li>Edited promotional videos in Premiere Pro.</li>
                    </ul>
                </Card>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1rem", width: "100%"}}><span>Information Systems Intern at All Points Broadband</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>May 2025-Aug 2025</i></span>}>
                        <ul>
                            <li>Built a WordPress plugin using PHP for custom Elementor widgets</li>
                            <li>Led the technical side of the allpointsbroadband.com website relaunch with SiteGround, WordPress, and phpMyAdmin</li>
                            <li>Worked as a ServiceNow administrator and application developer to lead the development of custom ServiceNow applications using JS</li>

                        </ul>
                    </Card>
                    <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1rem", width: "100%"}}><span>Quality Assurance Analyst at Matrix Group International</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>Jun 2024-Aug 2024</i></span>}>
                        <ul>
                            <li>Tested and provided useful technical feedback on the MatrixMaxx AMS SaaS product following a major version launch, ensuring clients had a smooth transition into new features.</li>
                            <li>Following bug fixes, sent replies to clients and updated support center documents in WordPress.</li>
                        </ul>
                    </Card>
                </div>
            </NonScrollingCardView>
            <NonScrollingCardView title="Education">
                <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1rem", width: "100%"}}><span>Virginia Commonwealth University</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>Aug 2024-Present</i></span>}>
                    Pursuing a <strong>Bachelor of Science in Computer Science</strong> with a <strong>concentration in Software Engineering</strong> and a <strong>minor in Data Science</strong>.
                    <br />
                    <br />
                    Important Courses:
                    <ul style={{marginTop:0}}>
                        <li>Programming Languages</li>
                        <li>Fundamentals of Software Engineering</li>
                        <li>Intro to Data Structures</li>
                        <li>Algorithm Analysis with Advanced Data Structures</li>
                        <li>Intro to Statistical Computing for Data Science</li>
                    </ul>
                    Activities and Societies:
                    <ul style={{marginTop:0}}>
                        <li>Climbing Club (Treasurer)</li>
                        <li>Emerging Leaders Program</li>
                        <li>Activities Programming Board</li>
                    </ul>
                </Card>
                <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1rem", width: "100%"}}><span>Alexandria City High School</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>Aug 2020-Jun 2024</i></span>}>
                    Graduated with an advanced diploma and 49 transferrable AP and Dual Enrollment credits.
                    <br />
                    <br />
                    Activities and Societies:
                    <ul style={{marginTop:0}}>
                        <li>Titan Robotics (Programming Lead)</li>
                        <li>Robotics Class Teaching Assistant</li>
                        <li>Engineering Drawing and Design Teaching Assistant</li>
                        <li>Architectural Drawing and Design Teaching Assistant</li>
                    </ul>
                </Card>
            </NonScrollingCardView>
        </>
    );
}
