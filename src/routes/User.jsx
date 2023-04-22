import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/User.module.css";

export default function SingleUser() {
  const params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.userId}`)
      .then((respons) => respons.json())
      .then((json) => setUser(json.data));
  }, []);

  return (
    <div className={styles.conteiner}>
      <div className={styles.conteiner_user}>
        <img
          src={`https://reqres.in/img/faces/${user.id}-image.jpg`}
          alt="user image"
          className={styles.img}
        />
        <div>
          <p className={styles.title}>
          firstName:
        </p>
        <p className={styles.text}>{user.first_name}</p>
        <p className={styles.title}>
          lastName:
          </p>
        <p className={styles.text}>{user.last_name}</p>
        <p className={styles.email}>{user.email}</p>
        </div>
        
      </div>
      <div className={styles.link}>
        <Link to="/users">Back to All Users</Link>
      </div>
    </div>
  );
}
