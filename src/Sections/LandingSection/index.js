import React from "react";
import "./style.css";
import Footer from "../../components/Footer";
import SigninBtn from "../../components/SigninBtn";

const LandingSection = (props) => {
  return (
    <div
      className={`section-container logo-scroll${props.sectionNum}`}
      style={{
        color: props.color,
        background: props.background,
        borderRadius: props.sectionNum === "1" ? "0" : "50px 50px 0 0",
      }}
    >
      <div className="middle-section row justify-content-end">
        <div className="right-section col-md-7 col-sm-12 d-flex align-items-center justify-content-end">
          {/* <div
            className="video-container"
            dangerouslySetInnerHTML={{
              __html: `<video autoplay muted loop width="100%">
                    <source src=${props.videoSource} height="100%" type="video/mp4" />
                     </video>`,
            }}
          /> */}
          {/* <div className="video-container">
            <ReactPlayer
              url={props.videoSource}
              muted={true}
              playsinline={true}
              loop={true}
              playing={true}
              width="100%"
              height="auto"
            />
          </div> */}
          {/* <div
            dangerouslySetInnerHTML={{
              __html: `
                    <video
                      loop
                      muted
                      autoPlay="true"
                      width="100%"
                      src="${props.videoSource}"
                      playsInLine
                    />,
                  `,
            }}
          ></div> */}
        </div>
        {/* <div className="left-section col-md-4 col-sm-12 order-md-first mt-5 justify-content-between d-flex flex-column"> */}
        <div className="left-section col-md-4 col-sm-12 order-md-first justify-content-between d-flex flex-column">
          <div className="left-section1 d-flex flex-column justify-content-center">
            <div className="charge-decription">
              What if {props.group}
              <br /> were in charge?
            </div>
            <SigninBtn color={props.color} background={props.background} />
          </div>
          <Footer color={props.color} />
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
