// Other imports remain the same
import dynamic from 'next/dynamic';
import { Footer, Navbar } from "../components";
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Features from "./features";
import Hero from "./hero";
import Partners from "./partners";
import WhyChooseUs from "./why-choose-us";

// Dynamically import VideoIntro with SSR disabled
const VideoIntroWithNoSSR = dynamic(() => import('./video-intro'), { ssr: false });

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntroWithNoSSR /> {/* Use the dynamically imported version */}
      <Features />
      <Gallery />
      <Partners />
      <WhyChooseUs />
      <Team />
      <Footer />
    </>
  );
}