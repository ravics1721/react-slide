import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Slides from "./components/Slides";

function closeMusic(bgm) {
  setTimeout(() => {
    bgm.pause();
  }, 5000);
}

function App() {
  const [index, setIndex] = useState(0);
  function handleSelct(selectedIndex, e) {
    setIndex(selectedIndex);
    console.log(index);
  }
  useEffect(() => {
    switch (index) {
      case 0:
        var bgm = new Audio("/audio/bgm1.mp3");
        bgm.play();
        closeMusic(bgm);
        break;

      case 1:
        var bgm = new Audio("/audio/bgm2.mp3");
        bgm.play();
        closeMusic(bgm);
        break;

      case 2:
        var bgm = new Audio("/audio/bgm3.mp3");
        bgm.play();
        closeMusic(bgm);
        break;

      case 3:
        var bgm = new Audio("/audio/bgm4.mp3");
        bgm.play();
        closeMusic(bgm);
        break;

      case 4:
        var bgm = new Audio("/audio/bgm5.mp3");
        bgm.play();
        closeMusic(bgm);
        break;

      default:
        console.log("wrong button pressed.");
    }
  }, [index]);
  return (
    <div style={{ height: "100vh", background: "black" }}>
      <Carousel activeIndex={index} onSelect={handleSelct} fade={true}>
        <Slides
          interval={2000}
          img="https://images.unsplash.com/photo-1619253187768-ff0262fb08b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          title="First Slide"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <Slides
          interval={2000}
          img="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Second Slide"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <Slides
          interval={2000}
          img="https://images.unsplash.com/photo-1619340207451-b8dee65a7546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Third Slide"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <Slides
          interval={2000}
          img="https://images.unsplash.com/photo-1618089086953-c1b3b2b6f19c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Fouth Slide"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <Slides
          interval={2000}
          img="https://images.unsplash.com/photo-1618613172925-f82dc2a07c3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          title="Fifth Slide"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Carousel>
    </div>
  );
}

export default App;
