import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import vidBg from "../assets/bgvid2.mp4";

import './Home.css'

const Smoke = () => {
  return (
    <section className="smoke-section">
      <video autoplay muted></video>
      <h1 className="head">
        <span>C</span>
        <span>Y</span>
        <span>N</span>
        <span>O</span>
        <span>S</span>
        <span>U</span>
        <span>R</span>
        <span>E</span>
      </h1>
      <div className="mouse-scroll">
        <div className="arrow-scroll">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
}


const Header = () => {
  return (
    <div className="main">
      <video src={vidBg} autoPlay loop muted className="video"></video>
    </div>
  );
}



export const Home = () => {
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);
  const mountainsRef = useRef(null);
  const soldierRef = useRef(null);
  const h1Ref = useRef(null);
  const lenis = new Lenis({});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const bg1 = document.querySelector(".wrapper");
  const bg2 = document.querySelector(".bg2");
  const mountains = document.querySelector(".mountains");
  const soldier = document.querySelector(".soldier");
  const h1 = document.querySelector("h1 span");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top bottom",
      scrub: 1,
    },
  });

  gsap.set(soldier, { scale: 0.8 });

  tl.to(mountains, { scale: 1.4, y: 30 }).to(soldier, { scale: 1.7, y: 90 }, 0);

  gsap.from(h1, {
    yPercent: 100,
    scrollTrigger: {
      trigger: h1,
      start: "top bottom",
      scrub: 1,
    },
  });
  useEffect(() => {
    const lenis = new Lenis({});
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const bg1 = bg1Ref.current;
    const bg2 = bg2Ref.current;
    const mountains = mountainsRef.current;
    const soldier = soldierRef.current;
    const h1 = h1Ref.current;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bg1,
        start: "top bottom",
        scrub: 1,
      },
    });

    gsap.set(soldier, { scale: 0.8 });

    tl.to(mountains, { scale: 1.4, y: 30 }).to(
      soldier,
      { scale: 1.7, y: 90 },
      0
    );

    gsap.from(h1, {
      yPercent: 100,
      scrollTrigger: {
        trigger: h1,
        start: "top bottom",
        scrub: 1,
      },
    });
  }, []);
  return (
   <><body>
          <section className="top">
              <div>


                  <Header />
                  <h1>
                      <Smoke />
                  </h1>
              </div>
          </section>

          <section className="container">
              <div className="wrapper" ref={bg1Ref}>
                  <h1 className="text-mask">
                      <span ref={h1Ref}>The Warrior Awaits</span>
                  </h1>
                  <div className="bg2" ref={bg2Ref}></div>
                  <div className="mountains" ref={mountainsRef}></div>
                  <div className="soldier" ref={soldierRef}></div>
              </div>
          </section>

          <section></section>
      </body><script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
      ></script><script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
      ></script><script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.39/dist/lenis.min.js"></script><script></script></>
  );
};
