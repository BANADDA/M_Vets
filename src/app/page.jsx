// pages/campaign.js

import dynamic from 'next/dynamic';
import { Footer, Navbar } from "../components";
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Features from "./features";
import Funders from './funders';
import Hero from "./hero";
import Partners from "./partners";
import StatsContainer from './stats';
import WhyChooseUs from "./why-choose-us";

// Dynamically import VideoIntro with SSR disabled
const VideoIntroWithNoSSR = dynamic(() => import('./video-intro'), { ssr: false });

// Dynamically import TwitterFeed with SSR disabled
const TwitterFeedWithNoSSR = dynamic(() => import('../components/TwitterFeed'), { ssr: false });

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntroWithNoSSR />
      <StatsContainer />
      <Features />
      <Gallery />
      <WhyChooseUs />
      <Funders />
      <Partners />
      <Team />
      <TwitterFeedWithNoSSR /> {/* Twitter feed added here */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
