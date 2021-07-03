import React, { useState, useEffect } from "react";
import styles from "./Overfront.module.scss";
import Overback from "../Overback";

const Overfront = (props) => {
  const isShown = props.modal ? styles.mainContainer : styles.opaque;

  const [end, setEnd] = useState(false);

  const toggleEnd = () => {
    console.log("end");
    setEnd(!end);
  };

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <>
      <div className={isShown}>
        <div className={styles.blank}>
          <Overback show={end} />
        </div>
        <div
          className={end ? styles.fadeContainer : styles.textContainer}
          id="text"
        >
          <p>POLYMORPH</p>
        </div>
        <div className={styles.formSection}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <div className={end ? styles.fadeDisplay : styles.formDisplay}>
              <input
                type="email"
                name="MERGE0"
                id="MERGE0"
                placeholder="ENTER EMAIL ADDRESS"
                className={styles.email}
              />
              <div className={styles.line}></div>
              <input
                type="submit"
                value="SIGN UP"
                className={styles.signUp}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(document.getElementById("MERGE0").value);
                  toggleEnd();
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Overfront;
