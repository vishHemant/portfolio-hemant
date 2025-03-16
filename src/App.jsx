import React, { useEffect, useRef, useState } from 'react'
import Header from './component/Header'
import Home from './component/Home'
import AboutMe from './component/AboutMe'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/footer'
import CustomCursor from './component/CustomCursor'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {


  const progressRef = useRef(null);


  const handleScroll = () => {

    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    if (progressRef.current) {
      progressRef.current.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
      progressRef.current.style.display = pos > 100 ? 'grid' : 'none';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (progressRef.current) {
      progressRef.current.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  // ================= GSAP ==================

  const { home, about, skills, projects, contact } = useRef();




  useGSAP(() => {
    let mm = gsap.matchMedia();


    gsap.from('.home .text-1', {
      y: -500,
      duration: .8,
    });
    gsap.from('.home .text-2', {
      x: -1200,
      duration: 1.5,
      delay: .2,
    });
    mm.add("(min-width: 991px)", () => {
      gsap.from('.home .text-2',
        {
          scale: 1.6,
          scrollTrigger: {
            trigger: '.home .text-2',
            duration: 0.8,
            start: '50% bottom',
            end: 'center top',
            scrub: true,
          },
        });
    }),
      gsap.from('.home .text-3', {
        y: 500,
        duration: 1,
        delay: .4
      });
    gsap.from('.home .lava_main', {
      rotation: 180,
      duration: 1.5,
      delay: .5
    });


    mm.add("(min-width: 991px)", () => {
      gsap.from('.about .title', {
        scale: 2,
        x: 500,
        y: -150,
        scrollTrigger: {
          trigger: '.about .title',
          duration: 0.3,
          start: '50% bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }),

      mm.add("(min-width: 991px)", () => {
        gsap.fromTo('.about .left',
          { scale: 0.2 }, {
          scale: 1.5,

          scrollTrigger: {
            trigger: '.about .left',
            duration: 0.8,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

    mm.add("(min-width: 991px)", () => {
      gsap.fromTo('.about .text',
        { x: -300, y: -50, scale: 4 }, {
        scale: 1,
        y: 0,
        x: 130,
        delay: .5,
        scrollTrigger: {
          trigger: '.about .text',
          duration: 0.8,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    mm.add("(min-width: 991px)", () => {
      gsap.fromTo('.about p',
        { x: 1000, y: -350, scale: 3 }, {
        scale: 1,
        y: 0,
        x: 0,
        delay: .5,
        scrollTrigger: {
          trigger: '.about p',
          duration: 0.8,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
    mm.add("(min-width: 991px)", () => {
      gsap.fromTo('.about ul',
        { x: 200, y: 50, scale: 1.1 }, {
        scale: 1,
        y: 0,
        x: -450,
        scrollTrigger: {
          trigger: '.about ul',
          duration: 0.8,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });


    mm.add("(min-width: 991px)", () => {
      gsap.from('.skills .title', {
        scale: 2,
        x: 500,
        y: -150,
        scrollTrigger: {
          trigger: '.skills .title',
          duration: 0.3,
          start: '50% bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    mm.add("(min-width: 991px)", () => {
      gsap.fromTo('.skills .text',
        { x: -300, y: -50, scale: 4 }, {
        scale: 1,
        y: 0,
        x: 110,
        delay: .5,
        scrollTrigger: {
          trigger: '.skills .text',
          duration: 0.8,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
    mm.add("(min-width: 991px)", () => {
      gsap.fromTo('.skills p',
        { x: -100, y: -650, scale: 2 }, {
        scale: 1,
        y: 0,
        x: 0,
        delay: .5,
        scrollTrigger: {
          trigger: '.skills p',
          duration: 0.8,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });


    gsap.to(".skills .info a:nth-child(even)", {
      rotation: -360,
      repeat: -1,
      repeatDelay: 2,
      duration: 2,
      yoyo: true,
    });
    gsap.to(".skills .info a:nth-child(odd)", {
      rotation: 360,
      repeat: -1,
      repeatDelay: 3,
      duration: 2,
      yoyo: true
    });


    mm.add("(min-width: 991px)", () => {
      gsap.from('.projects .title', {
        scale: 2,
        x: 500,
        y: -150,
        scrollTrigger: {
          trigger: '.projects .title',
          duration: 0.3,
          start: '50% bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
    mm.add("(min-width: 991px)", () => {
      gsap.fromTo('.projects .card:nth-child(1)',
        { x: -150, rotation: -120 }, {
        x: 72,
        rotation: 56.5,
        delay: .5,
        scrollTrigger: {
          trigger: '.projects .card:nth-child(1)',
          duration: 0.8,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
    mm.add("(min-width: 991px)", () => {
      gsap.fromTo('.projects .card:nth-child(3)',
        { x: 150, rotation: 120 }, {
        x: -72,
        rotation: -56.5,
        delay: .5,
        scrollTrigger: {
          trigger: '.projects .card:nth-child(3)',
          duration: 0.8,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    mm.add("(min-width: 991px)", () => {
      gsap.from('.contact .title', {
        scale: 2,
        x: 500,
        y: -150,
        scrollTrigger: {
          trigger: '.contact .title',
          duration: 0.3,
          start: '50% bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });


  }, { scope: home, about, skills, projects, contact });







  // ================= GSAP ==================




  return (

    <main>
      <CustomCursor />

      <Header />
      <Home home={home} />
      <AboutMe about={about} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer />

      <div id="progress" ref={progressRef}>
        <span id="pro_value">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.414 7.293 7.293 1.414-1.414L12 3.586l-8.707 8.707 1.414 1.414L12 6.414z"></path><path d="m3.293 18.293 1.414 1.414L12 12.414l7.293 7.293 1.414-1.414L12 9.586l-8.707 8.707z"></path></svg>
        </span>
      </div>

    </main>
  )
}

export default App