import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css"
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home Page</h1>
      <Link
        className={styles.link}
        to="/users"
      >
        Go To Users List
      </Link>
    </div>
  );
}
