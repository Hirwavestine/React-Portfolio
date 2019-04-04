import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class App extends Component {
  render() {
    return (
      <div style={{ height: "300px", position: "relative" }}>
        <Layout
          style={{
            background:
              "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
          }}
        >
          <Header transparent title="Title" style={{ color: "white" }}>
            <Navigation>
              <a href="/">Home</a>
              <a href="/">About Me</a>
              <a href="/">Contact Me</a>
              <a href="/">Resume</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Home</a>
              <a href="/">About Me</a>
              <a href="/">Contact Me</a>
              <a href="/">Resume</a>
              <a href="/">Gallery</a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
