import React from "react";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={styles.MenuBar}>
      <h1>Cuauhtemoc's Digital Resume</h1>
      <nav>
        <h2>Contact:</h2>
        <ul>
          <li style={{ listStyleImage: "url(gmail.png)" }}>
            Email: cxreilly42@gmail.com
          </li>
          <li style={{ listStyleImage: "url(linkedin.png)" }}>
            Linkedin: Cuauhtemoc Reilly
          </li>
          <li style={{ listStyleImage: "url(github.png)" }}>
            Github: cuauhtemoc-reilly-8178
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
