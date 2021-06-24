import "./App.css";
import styles from "./App.module.scss";
import Logo from "./components/Logo/Logo";
import FramePlayer from "./components/FramePlayer/FramePlayer";
import FrameOverlay from "./components/FrameOverlay";
import Overfront from "./components/Overfront";
import Overback from "./components/Overback";
import Button from "./components/Button/Button";
import { useState, useEffect } from "react";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log("u");
    setModal(!modal);
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <div className={styles.mainContainer}>
        {/* {/* <Overback /> */}
        <Button click={toggleModal} />
        <Overfront modal={modal} click={toggleModal} />
        <Logo />
        <FrameOverlay link="https://wwirving.github.io/mercury-shader/pearlfull.html" />
        <FramePlayer link="https://wwirving.github.io/mercury-shader/oil.html" />
      </div>
    </div>
  );
}

export default App;
