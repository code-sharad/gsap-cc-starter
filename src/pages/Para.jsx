import gsap from "gsap";
const Para = () => {
  gsap.to(".pContent", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    },
  });

  gsap.to(".pImage", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    },
  });
  return (
    <div>
      <h1 className="header-section">Scroll down to see some parallax effects</h1>
      <section className="pSection relative pt-96 pb-96">
        <div className="container p-20 max-w-[1020px] relative z-10">
          <div className="pContent">
            <p>
              This is a super simple example of how to create a basic parallax
              effect using GSAP's ScrollTrigger!
            </p>
            <p>
              For more information about ScrollTrigger, check out{" "}
              <a href="https://greensock.com" target="_blank">
                the GreenSock website.
              </a>
            </p>
          </div>
        </div>
        <img
          className="pImage"
          src="https://picsum.photos/1200/526?random=1"
          alt="Filler image"
        />
      </section>

    </div>
  );
}

export default Para;
