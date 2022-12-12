
import VideoControl from "../../assets/Icons/videocontrol.js";

import Hero from "../../Sections/hero/hero";
import Member from "../../Sections/member/member";
import Train from "../../Sections/train/train";
import Communicate from "../../Sections/communicate/communicate";
import GetApp from "../../Sections/getApp/getApp";
import Tech from "../../Sections/tech/tech";
import Lock from "../../Sections/lock/lock";
import Video from "../../Sections/video/video";
import Footer from "../../Sections/footer/footer";
import Stream from "../../Sections/stream/stream";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="App overflow-x-hidden px-[35px]">
      <Hero />
      <Member />
      <Train />
      <Stream />
      <Communicate />
      <Tech />
      <GetApp />
      <Lock />
      <Video />
      <Footer />
    </div>
  );
};

export default LandingPage;
