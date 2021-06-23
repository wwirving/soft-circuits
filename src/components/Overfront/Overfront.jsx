import React from "react";
import styles from "./Overfront.module.scss";

const Overfront = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.blank}>
          <p>X</p>
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
