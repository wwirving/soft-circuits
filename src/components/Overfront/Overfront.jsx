import React from "react";
import styles from "./Overfront.module.scss";

const Overfront = (props) => {
  const isShown = props.modal ? styles.mainContainer : styles.opaque;
  return (
    <>
      <div className={isShown}>
        <div className={styles.blank}>
          <p onClick={props.click}>X</p>
        </div>
        <div className={styles.textContainer}>
          <p>POLYMORPH</p>
        </div>
        <div className={styles.formSection}>
          <form>
            <div className={styles.formDisplay}>
              <input
                type="email"
                name="MERGE0"
                id="MERGE0"
                placeholder="ENTER EMAIL ADDRESS"
                className={styles.email}
              />
              <div className={styles.line}></div>
              <input type="submit" value="SIGN UP" className={styles.signUp} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Overfront;
