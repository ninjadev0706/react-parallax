import React from "react";
import { Parallax } from "react-scroll-parallax";
import Communicate from "./communicate/communicate";
import Listen from "./listen/listen";
import Stream from "./stream/stream";
import "./styles.css";

const Live = () => {
  // const textSource1 = ["Stream", "Listen", "Communicate"];
  // const textSource2 = ["Stream"];
  // const textSource3 = ["Stream"];

  // const [logoColor, setLogoColor] = useState("white");
  // const [state, setState] = useState(0);
  // const ref = useRef();

  // // The scroll listener
  // const handleScroll = useCallback(() => {
  //     const top = document.querySelector('.logo-scroll1').clientHeight;
  //     const scrollTop = ref.current.scrollTop;
  //     if (scrollTop > top) {
  //         setLogoColor('black')
  //     } else {
  //         setLogoColor('white')
  //     }
  // }, [])

  // useEffect(() => {
  //     const div = ref.current
  //     div.addEventListener("scroll", handleScroll)
  // }, [handleScroll])
  return (
    <div className="relative pt-[100px]">
      <div className="wrapper relative md:mb-[250px] mb-[150px] md:mt-[100px] mt-[50px]">
        <div className="section sticky section--s1">
          <Communicate />
        </div>
        {/* <div className="section sticky section--s2">
          <Listen />
        </div>
        <div className="section sticky section--s3">
          <Stream />
        </div> */}

        {/* <div className="landingPage-container" ref={ref}>
      {/* <div sectionNum="1" className="max-w-[1000px] md:px-[10%] m-auto justify-center items-center md:flex gap-[100px]">
          <CommunicateMobile videoSource="./items/live/communicate.mp4" />
          <CommunicateList textSource={textSource1} />
        </div> */}
        {/* <div sectionNum="2" className="max-w-[1000px] md:px-[10%] m-auto justify-center items-center md:flex gap-[100px]">
          <CommunicateMobile videoSource="./items/live/stream1.mp4" />
          <CommunicateList textSource={textSource2} />
        </div>
        <div sectionNum="3" className="max-w-[1000px] md:px-[10%] m-auto justify-center items-center md:flex gap-[100px]">
          <CommunicateMobile videoSource="./items/live/stream2.mp4" />
          <CommunicateList textSource={textSource3} />
        </div> */}
        {/* </div> */}
      </div>
      <div
        className="absolute 
        lg:bottom-[80px] xl:bottom-[30px] 2xl:bottom-[-20px] bottom-[600px]
        right-[-300px] md:right-[-180px] lg:right-[-200px] xl:right-[-180px] 2xl:right-[-200px]"
      >
        <div className="w-[500px] md:w-[400px] lg:w-[560px] xl:w-[680px] 2xl:w-[800px]">
          <Parallax translateY={[50, -20]}>
            <img src="./items/live/pipe.png" alt="" className="" />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Live;
