import { Helmet } from "react-helmet-async";
import Card, { CardOutButton, CardWidthType, NonScrollingCardView, Technology, TechnologyIcon } from "../components/Card.tsx";
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
            <NonScrollingCardView title="Skills" outButton={
                <CardOutButton href="/Hazel_Belmont_Resume.pdf" imgSrc={`${paths.icons}/out.png`}>
                    View My Résumé as a File
                </CardOutButton>
            }>
                <Card title="Frontend">
                    <Technology icon={<TechnologyIcon filename="react-logo.svg" />}>
                        React
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="vue-logo.svg" />}>
                        Vue.js
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="nuxt-logo.svg" />}>
                        Nuxt
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
                    <Technology icon={<TechnologyIcon filename="google-cloud-platform-logo.svg" />}>
                        Google Cloud Platform
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="aws-logo.svg" />}>
                        Amazon Web Services
                    </Technology>
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
                    <Technology icon={<TechnologyIcon filename="ubuntu-logo.svg" />}>
                        Ubuntu
                    </Technology>
                </Card>
                <Card title="Other">
                    <Technology icon={<TechnologyIcon filename="github-logo.svg" />}>
                        GitHub
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="adk-logo.png" />}>
                        Agent Development Kit
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="n8n-logo.svg" />}>
                        n8n
                    </Technology>
                    <Technology icon={<TechnologyIcon filename="wordpress-logo.svg" />}>
                        WordPress
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
                <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}><span>Frontend Developer (Contract) at Matrix Group International</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>May 2026-August 2026</i></span>} cardWidthType={CardWidthType.Full}>
                    <ul>
                        <li>Led development of a custom WordPress plugin, leveraging Vue for complex UI needs.</li>
                        <li>Created, managed, and monitored AWS Lambdas (Python), an API Gateway, and S3 buckets using a CloudFormation IaC project in a full-stack AWS Personalize implementation.</li>
                        <li>Demoed to clients, documenting and implementing their feedback throughout development.</li>
                        <li>Created TypeScript and Python scripts to clean and transform 10,000-row datasets.</li>
                    </ul>
                </Card>
                <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%"}}><span>Agentic Workflow Engineer Team Lead at MARi</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>March 2025-May 2026</i></span>} cardWidthType={CardWidthType.Full}>
                    <ul>
                        <li>Reduced an internal workflow’s time cost by 94% by creating and deploying a custom AI agent automation solution with Google ADK, n8n, QuickBooks, and Google Cloud Platform.</li>
                        <li>Wrote a React-TypeScript software tour from scratch for a production SaaS codebase.</li>
                        <li>Managed a team of interns creating client-facing AI agent systems using Google ADK, n8n, React, TypeScript, and Express.js.</li>
                    </ul>
                </Card>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <Card title={<span style={{display: "inline-flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "1rem", width: "100%"}}><span>Information Systems Intern at All Points Broadband</span><i style={{fontWeight: 100, fontSize: "1.2rem", minWidth: "6rem"}}>May 2025-Aug 2025</i></span>}>
                        <ul>
                            <li>Created a ZIP code-based internet coverage search for the marketing site’s homepage, and migrated the site with MySQL, WordPress, and SiteGround.</li>
                            <li>Created a WordPress plugin using PHP, JS, and CSS to create custom Elementor widgets.</li>
                            <li>Reduced friction in sales workflows by developing multiple custom ServiceNow applications in JavaScript as a ServiceNow administrator and application developer.</li>
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
