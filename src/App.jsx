import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home, Scroll, Para
} from "./pages";
import gsap from "gsap";

const App = () => {

  let tween = gsap.to('.box', { scrollTrigger: '.box', ease: 'elastic', rotate: 360, borderRadius: '100px', transition: true, x: 300, duration: 1 })
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <button onClick={() => tween.restart()}>click</button>
      <div className="p-4 ">
        <div className="box bg-white h-20 w-20"></div>
      </div>
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/para" element={<Para />} />
          <Route path="/scroll" element={<Scroll />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>




    </div>
  );
};

export default App;
