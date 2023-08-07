gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    end: "top 30%",
    scrub: 4,
    toggleActions: "restart none none none",
    pin: ".square",
    pinSpacing: false,
    // markers: true,
  }
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  }
});

tl.to(".box", {x: 500, duration: 5})
  .to(".box", {y: 200, duration: 2})
  .to(".box", {x: 0, duration: 2})


  // horizontal scroll

  let horizontalSection = document.querySelector('.horizontal');

  console.log(horizontalSection.scrollWidth);
  
  gsap.to('.horizontal', {
    x: () => horizontalSection.scrollWidth * -1,
    xPercent: 100,
    scrollTrigger: {
      trigger: '.horizontal',
      start: 'center center',
      end: '+=2000px',
      pin: '#horizontal-scoll',
      scrub: true,
      invalidateOnRefresh: true
    }
  });
  