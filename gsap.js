const heart = document.querySelector(".heart");
const heartContainer = document.querySelector(".heart-container");
const figure = document.querySelector("figure");

gsap.fromTo(
  ".arrow",
  {
    x: -3,
  },
  {
    x: 3,
    yoyo: true,
    ease: "power4.in",
    duration: 1,
    repeat: -1,
  }
);

const tl = gsap.timeline();

tl.from(heart, { autoalpha: 0, scale: 0, duration: 2, ease: "power3.in" });

tl.to(heart, {
  scale: 1.3,
  duration: 0.5,
  yoyo: true,
  repeat: 7,
});

tl.to(
  heart,
  {
    opacity: 0,
    scale: 0,
    duration: 2,
    ease: "power4.in",
  },
  5
);

tl.to(heartContainer, {
  opacity: 0,
  duration: 2,
  ease: "power4.in",
  delay: 1,
  zIndex: -1,
});

tl.from(figure, {
  autoalpha: 0,
  duration: 2,
});
tl.to(
  figure,
  {
    opacity: 0,
    duration: 1,
  },
  "+=2"
);
tl.to(figure, {
  height: 0,
  duration: 0.1,
});
tl.from(
  "p",
  {
    opacity: 0,
    y: 10,
    stagger: 1,
  },
  "+=1"
);
tl.from(
  ".btn",
  {
    opacity: 0,
    y: 10,
    duration: 1,
  },
  "+=2"
);
