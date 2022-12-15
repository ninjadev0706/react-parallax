import React, { useRef, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Communicate from "./communicate/communicate";
import Listen from "./listen/listen";
import Stream from "./stream/stream";
import "./styles.css";

const Live = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <>
      <div className="relative -mb-[650px] pt-60 hidden sm:block">
        <Controller>
          <Scene
            triggerHook="onLeave"
            duration="200%"
            pin
          >
            <Timeline
              wrapper={<div className="relative overflow-hidden" />}
            >
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
                    <source
                      src="./items/live/stream.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <p className="font-drukBold font-bold leading-[2] md:text-[40px] lg:text-[55px] text-[35px] w-[400px]" id="index">
                  Stream
                </p>
              </div>
              <Tween
                from={{ y: '-100%' }}
                to={{ y: '0%' }}
              >
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
                  <p className="bg-white font-drukBold font-bold leading-[2] md:text-[40px] lg:text-[55px] text-[35px] w-[400px]" id="index">
                    Listen
                  </p>
                </div>
              </Tween>
              <Tween
                from={{ y: '100%' }}
                to={{ y: '0%' }}
                duration={1}
              >
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
                  <p className=" bg-white font-drukBold font-bold leading-[2] md:text-[40px] lg:text-[55px] text-[35px] w-[400px]" id="index">
                    Chat
                  </p>
                </div>
              </Tween>
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
      <div className="block sm:hidden mb-[200px] sm:mb-0 relative">
        <div className="flex flex-col overflow-hidden gap-[50px] md:gap-[100px] items-center justify-center">
          <p className="font-drukBold font-bold leading-[2] md:text-[40px] lg:text-[55px] text-[35px] w-[400px] text-center" id="index">
            Stream
          </p>
          <div className="rounded-[24px] overflow-hidden">
            <video
              playsInline
              autoPlay
              muted
              loop
              ref={vidRef}
              className="w-[240px] h-full"
            >
              <source
                src="./items/live/stream.mp4"
                type="video/mp4"
              />
            </video>
            <img src='./items/train/globe.png' alt=' ' className='absolute left-[10%] top-[140px]' />
            <img src='./items/train/stick.png' alt=' ' className='absolute right-[50px] -bottom-[50px] w-[100px]' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
