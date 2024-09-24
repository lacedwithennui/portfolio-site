import React from "react";
import Hero, { CarouselItem, FeaturedHeroCarousel, HeroGradientStyle } from "../components/Hero.tsx";
import Card, { CardWidthType, VerticalCardView } from "../components/Card.tsx";
import { Helmet } from "react-helmet-async";
import { paths } from "../components/util.tsx";

export default function Home() {
    return(
        <>
            <Helmet>
                <title>Hazel Belmont | Home</title>
                <meta name="description" content="Learn about Hazel's skills and experience." />
            </Helmet>
            {/* <Hero gradientStyle={HeroGradientStyle.BlueLavender} title="Hazel Belmont" /> */}
            <FeaturedHeroCarousel>
                <CarouselItem title="Portfolio Site" src={paths.images + "codesc.png"} href="/portfolio"><u>Click</u> to see the React JSX with TypeScript and SCSS behind this website.</CarouselItem>
                <CarouselItem title="The Mighty Pirates Mini-CMS" src={paths.images + "mp-site.png"}>The Mighty Pirates' website is a dynamic post-based ReactJS site made with JSX that interfaces with a custom MongoDB API to serve an updatable set of content.</CarouselItem>
                <CarouselItem title="MongoAPI" src={paths.images + "mp-site.png"}>MongoAPI is a REST-ful API written with the Java Spark library and made for handling MongoDB operations from <u>The Mighty Pirates' Website.</u></CarouselItem>
            </FeaturedHeroCarousel>
       </>
    );
}