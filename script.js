function loading() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.3,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.8,
      duration: 0.3,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.9,
      duration: 0.5,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    opacity: 0,
    display: "none",
  });
}
loading();

const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.05,
});

document.querySelector("#footer h2").addEventListener("click", () => {
  scroll.scrollTo(0);
});
document
  .querySelector("#page1_footer a:nth-child(2)")
  .addEventListener("click", () => {
    scroll.scrollTo(page2);
  });
document.querySelector("#page2 button").addEventListener("click", () => {
  scroll.scrollTo(page3);
});

var main = document.querySelector("#page2");
var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var bgImage = elem.getAttribute("data-img");
    main.style.backgroundImage = `url(${bgImage})`;
  });
});
