import "../style/HowToUse.css";
import AnimatedTopToBottom from "../Animated/AnimatedTopToBottom";
import AnimatedBottomToTop from "../Animated/AnimatedBottomToTop";
// import AnimatedRightToLeft from "../Animated/AnimatedRightToLeft"
// import AnimatedLeftToRight from "../Animated/AnimatedLeftToRight"
// import React, { useRef, useEffect } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";
const steps = [
  { id: 1, title: "اختر نوع الخدمة", icon: "bx-search-alt-2" },
  { id: 2, title: "اقرأ المتطلبات", icon: "bxs-file" },
  { id: 3, title: "اتبع الخطوات", icon: "bxs-book" },
  { id: 4, title: "نفّذ الخدمة بسهولة", icon: "bxs-check-circle" },
];
function HowToUse() {
//       const videoRef = useRef(null);

//   useEffect(() => {
//     const player = videojs(videoRef.current);

//     return () => {
//       player.dispose();
//     };
//   }, []);
  return (
    <div className="how-section">
      <AnimatedTopToBottom>
        <h2 className="how-title">طريقة استخدام الموقع</h2>
      </AnimatedTopToBottom>
        <div className="how-steps">
                {steps.map((step, index) => ( 
                    <AnimatedBottomToTop key={index} stagger={2} classname="card-width">
                        <div className="how-card">
                            <div className="how-number">{step.id}</div> 
                            <div className="how-icon">
                                <i className={`bx ${step.icon}`} ></i> 
                            </div> 
                            <p className="how-desc">{step.title}</p> 
                        </div>
                    </AnimatedBottomToTop> 
                ))} 
        </div>
        {/* <AnimatedRightToLeft classname="mt-5">
            <h3 className="how-title">فيديو يوضح طريقة استخدام الموقع :</h3>
        </AnimatedRightToLeft>
        <AnimatedLeftToRight classname="mt-5">
                <video
                ref={videoRef}
                className="video-js vjs-big-play-centered"
                controls
                data-setup="{}"
                >
                <source src="/How to use video.mp4" type="video/mp4" />
                </video>

        </AnimatedLeftToRight> */}
    </div>
  );
}

export default HowToUse;
