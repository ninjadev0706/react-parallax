import React, { useRef, useEffect, useCallback, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Communicate from "./communicate/communicate";
import Listen from "./listen/listen";
import Stream from "./stream/stream";
import "./styles.css";

const Live = () => {
  const vidRef = useRef();
  // const [streamShow, setStreamShow] = useState(false);
  // const [chatShow, setChatShow] = useState(false);
  // const [listenShow, setListenShow] = useState(false);
  // const streamRef = useRef();
  // const chatRef = useRef();
  // const listenRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);

  // const handleScroll = useCallback(() => {
  //   // const streamTop = streamRef.current.scrollTop;
  //   // if (streamTop < 250) {
  //   //   setStreamShow(true);
  //   // } else {
  //   //   setStreamShow(false);
  //   // }
  //   const streamTop = streamRef.current.getBoundingClientRect().y;
  //   const chatTop = chatRef.current.getBoundingClientRect().y;
  //   const listenTop = listenRef.current.getBoundingClientRect().y;

  //   if((chatTop < 76) && (chatTop > 50)) {
  //     setChatShow(true)
  //   } else {
  //     setChatShow(false)
  //   }
  //   // if (chatTop < 250) {
  //   //   setChatShow(true);
  //   // } else {
  //   //   setChatShow(false);
  //   // }
  //   // const listenTop = listenRef.current.scrollTop;
  //   // if (listenTop < 250) {
  //   //   setListenShow(true);
  //   // } else {
  //   //   setListenShow(false);
  //   // }

  //   console.log("log ==> ", streamTop, chatTop, listenTop)

  //   console.log(12345);
  // }, []);

  // useEffect(() => {
  //   // handleScroll();
  //   const streamdiv = streamRef.current;
  //   document.addEventListener("scroll", handleScroll);

  //   console.log(document.querySelector('body'));
  //   // const chatdiv = chatRef.current;
  //   // chatdiv.addEventListener("scroll", handleScroll);
  //   // const listendiv = listenRef.current;
  //   // listendiv.addEventListener("scroll", handleScroll);
  // }, [handleScroll]);

  return (
    <>
      <div className="relative pt-60 hidden sm:block">
        <Controller>
          <Scene triggerHook="onLeave" duration="200%" pin>
            <Timeline
              wrapper={<div className="flex items-center gap-[100px]" />}
            >
              <div className="relative overflow-hidden">
                <div className="text-height absolute top-0 right-0 z-10 w-[400px]" />
                <div className="text-height absolute bottom-0 right-0 z-10 w-[400px]" />
                <div className="flex items-center flex-col-reverse sm:flex-row overflow-hidden gap-[50px] md:gap-[100px] video-height">
                  <div className="rounded-[36px] w-[320px] overflow-hidden">
                    <video
                      playsInline
                      autoPlay
                      muted
                      loop
                      ref={vidRef}
                      className=" h-full"
                    >
                      <source src="./items/live/stream.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <p
                    className="font-drukBold font-bold leading-[70px] md:text-[40px] lg:text-[55px] text-[35px] w-[400px] h-[70px] bg-white w-[400px]"
                    id="index"
                  >
                    Stream
                  </p>
                </div>
                <Tween from={{ y: "100%" }} to={{ y: "0%" }}>
                  <div className="flex items-center flex-col-reverse sm:flex-row absolute top-0 overflow-hidden gap-[50px] md:gap-[100px] video-height">
                    <div className="rounded-[36px] w-[320px] overflow-hidden">
                      <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        ref={vidRef}
                        className=" h-full"
                      >
                        <source
                          src="./items/live/listen.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p
                      className="font-drukBold font-bold leading-[70px] md:text-[40px] lg:text-[55px] text-[35px] w-[400px] h-[70px] bg-white w-[400px]"
                      id="index"
                    >
                      Chat
                    </p>
                  </div>
                </Tween>
                <Tween from={{ y: "100%" }} to={{ y: "0%" }} duration={1}>
                  <div className="flex items-center flex-col-reverse sm:flex-row absolute top-0 overflow-hidden gap-[50px] md:gap-[100px] video-height">
                    <div className="rounded-[36px] w-[320px] overflow-hidden">
                      <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        ref={vidRef}
                        className=" h-full"
                      >
                        <source
                          src="./items/live/communicate.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p
                      className="font-drukBold font-bold leading-[70px] md:text-[40px] lg:text-[55px] text-[35px] w-[400px] h-[70px] bg-white w-[400px]"
                      id="index"
                    >
                      Listen
                    </p>
                  </div>
                </Tween>
              </div>
            </Timeline>
          </Scene>
        </Controller>
        <div
          className="absolute bottom-[900px]
        right-[-300px] md:right-[-180px] lg:right-[-200px] xl:right-[-180px] 2xl:right-[-200px]"
        >
          <div className="w-[500px] md:w-[400px] lg:w-[560px] xl:w-[680px] 2xl:w-[800px]">
            <Parallax translateY={[50, -20]}>
              <img src="./items/live/pipe.png" alt="" className="w-[110%]" />
            </Parallax>
          </div>
        </div>
      </div>
      <div className="block sm:hidden my-[100px] sm:mb-0 relative">
        <Controller>
          <Scene triggerHook="onLeave" duration="200%" pin>
            <Timeline wrapper={<div className="flex justify-center" />}>
              <div className="relative overflow-hidden">
                <Tween from={{ y: "0%" }} to={{ y: "0%" }}>
                  <div className="flex justify-center flex-col sm:flex-row overflow-hidden gap-[50px] md:gap-[100px] video-height">
                    <div className="rounded-[36px] w-[277px] overflow-hidden z-40">
                      <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        ref={vidRef}
                        className=" h-full"
                      >
                        <source
                          src="./items/live/stream.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p
                      className="font-drukBold font-bold leading-[70px] md:text-[40px] lg:text-[55px] text-[35px]  bg-white z-10 px-[30px] text-center"
                      id="index"
                    >
                      Stream
                    </p>
                  </div>
                </Tween>
                <Tween from={{ y: "100%" }} to={{ y: "0%" }}>
                  <div className="flex justify-center flex-col sm:flex-row absolute top-0 overflow-hidden gap-[50px] md:gap-[100px] video-height">
                    <div className="rounded-[36px] w-[277px] overflow-hidden z-50">
                      <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        ref={vidRef}
                        className=" h-full"
                      >
                        <source
                          src="./items/live/listen.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p
                      className="font-drukBold font-bold leading-[70px] md:text-[40px] lg:text-[55px] text-[35px]  bg-white z-20  px-[50px] text-center"
                      id="index"
                    >
                      Chat
                    </p>
                  </div>
                </Tween>
                <Tween from={{ y: "100%" }} to={{ y: "0%" }} duration={1}>
                  <div className="flex justify-center flex-col sm:flex-row absolute top-0 overflow-hidden gap-[50px] md:gap-[100px] video-height">
                    <div className="rounded-[36px] w-[277px] overflow-hidden z-60">
                      <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        ref={vidRef}
                        className="h-full"
                      >
                        <source
                          src="./items/live/communicate.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <p
                      className="font-drukBold font-bold leading-[70px] md:text-[40px] lg:text-[55px] text-[35px]  bg-white z-30 px-[30px] text-center"
                      id="index"
                    >
                      Listen
                    </p>
                  </div>
                </Tween>
              </div>
            </Timeline>
          </Scene>
        </Controller>
      </div>
    </>
  );
};

export default Live;
