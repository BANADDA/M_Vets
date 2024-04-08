// components
import { Footer, Navbar } from "@/components";

// sections
import Features from "./features";
import Hero from "./hero";
import Partners from "./partners";
import VideoIntro from "./video-intro";
import WhyChooseUs from "./why-choose-us";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Features/>
      <Partners/>
      <WhyChooseUs/>
      {/* <Feature />
      <MobileConvenience />
      <Testimonials />
      <Faqs /> */}
      <Footer />
    </>
  );
}
