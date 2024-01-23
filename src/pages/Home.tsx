import React from "react";
import Hero, { HeroGradientStyle } from "../components/Hero.tsx";
import Card, { CardWidthType, HorizontalCardView, VerticalCardView } from "../components/Card.tsx";

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
                <Card title="Skills Sumary">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Card>
            </VerticalCardView>
       </>
    );
}