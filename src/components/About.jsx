import React from "react"

import { Container} from "./common/container"
import { Title} from "./common/title"
import { Button } from "./common/button"

import profile from "../assets/image/SamakshGrover1.jpeg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Samaksh Grover, a passionate full Stack Devloper. I
              develop web applications, and desktop applications. My core skill
              is based on JavaScript and I love to do most of the things using
              JavaScript. I love to make the web more open to the world. I am a
              self taught devloper/programmer. I am available for any kind of
              job opportunity that suits my interests.
            </p>
            <div className="about-action">
              <Button
                link="https://drive.google.com/file/d/121baA4_aWf6_G2oM1ugu-iG1VsljqnsS/view?usp=sharing"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About