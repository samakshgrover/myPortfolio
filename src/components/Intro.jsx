import React from "react";
import { Button } from "./common/button";
import { Container } from "./common/container";
import { Title } from "./common/title";

import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Samaksh Grover</h1>
            <h3>Full Stack Developer</h3>
            <ul>
              <li>{""}</li>
              <li>Programmer</li>
              <li>Web Developer</li>
            </ul>
            <div className="action">
              <Button
                link="https://drive.google.com/file/d/121baA4_aWf6_G2oM1ugu-iG1VsljqnsS/view?usp=sharing"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
