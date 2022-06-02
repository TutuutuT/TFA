import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// apparition titres


gsap.from('.t-titre',{
    delay: 0.7,
    y: 100,
    duration: 0.7,
    ease: 'easeIn'
});

gsap.from('.b-titre',{
    delay: 0.5,
    y: 100,
    duration: 0.7,
    ease: 'easeIn'
});


//anim gsap


gsap.from(".title", {
    scrollTrigger: ".intro__title",
    y: 100,
    delay: 0.5,
  });

gsap.from(".list__item", {
    scrollTrigger: ".intro__title",
    y: 100,
    delay: 0.7,
    stagger: 0.05,
  });

  gsap.from(".style-list", {
    scrollTrigger: ".intro__title",
    y: 100,
    delay: 0.7,
  });

  gsap.from(".button-nav", {
    scrollTrigger: ".intro__title",
    y: 100,
    opacity: 0,
    delay: 1,
    stagger: 0.05,
  });
