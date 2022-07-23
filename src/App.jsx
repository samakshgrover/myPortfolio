import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from './components/Contact'
import Portfolio from "./components/Portfolio";
import Layout from './components/common/layout'

const IndexPage = () => (
  <>
    <Layout>
      <Intro />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </Layout>
  </>
);

export default IndexPage;
