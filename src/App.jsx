import "./App.css";
import styles from "./App.module.scss";
import Logo from "./components/Logo/Logo";
import FramePlayer from "./components/FramePlayer/FramePlayer";
import FrameOverlay from "./components/FrameOverlay";
import Overfront from "./components/Overfront";
import Overback from "./components/Overback";

function App() {
  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <Overback />
        <Overfront />
        <Logo />
        <FrameOverlay link="https://wwirving.github.io/mercury-shader/pearlfull.html" />
        <FramePlayer link="https://wwirving.github.io/mercury-shader/oil.html" />
      </div>
    </div>
  );
}

export default App;
