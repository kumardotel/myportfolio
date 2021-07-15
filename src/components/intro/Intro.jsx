import React from "react";
import "./intro.scss";
// import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      strings: ["Developer", "Designer", "Learner"],
    });
  }, []);
  return (
    <div id="intro" className="introduction">
      <div className="left">
        <div className="contentwrapper">
          <h2>Hi There, I'm</h2>
          <h1>Kumar Dotel</h1>
          <h3>
            Web <span className="myJob" ref={textRef}></span>
          </h3>
          <div className="social-links">
            <div className="github-icon">
              <a href="https://github.com/kumardotel" target="_blank">
                <GitHubIcon className="name-icon" />
              </a>
            </div>
            <div className="twitter-icon">
              <a href="https://twitter.com/kumardotel8" target="_blank">
                <TwitterIcon className="name-icon-twitter" />
              </a>
            </div>
          </div>
        </div>
        <a className="downarrowlink" href="#portfolio">
          <KeyboardArrowDownIcon className="downArrow" />
        </a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets/hello.svg" alt="my profile image" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
