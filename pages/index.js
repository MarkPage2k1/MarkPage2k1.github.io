import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
I'm Mark, a passionate programmer and experienced DevOps engineer with a strong tech background. With years in software, I'm intrigued by the creation, operation, and security of technologies. As I journey ahead, I'm honing my cybersecurity skills. Open-minded and approachable, feel free to connect! Regards.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        {/* <link rel="stylesheet" href="css/template-dark/dark.css" /> */}
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/avatar.gif)" }}
          />
          <div className="title">Mark Page</div>
          <TypingAnimation />
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/markpage2k1/">
              <span className="fa fa-facebook-square" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/markpage2k1/">
              <span className="fa fa-linkedin-square" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/MarkPage2k1/">
              <span className="fa fa-twitter-square" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/MarkPage2k1">
              <span className="fa fa-github-square" />
            </a>
            <a href="#">
              <span className="fa fa-youtube-square" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://blog.markpage2k1.me/">
              <span className="fa fa-rss-square" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
              <span class="ion ion-ios-cloud-download"></span>
            </a>
            <a href="mailto:markpage.dev@gmail.com" className="lnk discover">
              <span className="text">Contact Me</span>
              <span class="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          {/* <Pricing /> */}
          {/* <FunFact /> */}
          {/* <Clients /> */}
          {/* <Quote /> */}
        </About>
        <Resume>
          <ResumeSection />
          {/* <Skills /> */}
          {/* <Testimonials /> */}
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        {/* <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact> */}
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
