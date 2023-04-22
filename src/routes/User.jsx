import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../styles/User.module.css"

export default function SingleUser() {
  const params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.userId}`)
      .then((respons) => respons.json())
      .then((json) => setUser(json.data));
  }, []);
  

  
  return (
    <div className={styles.conteiner} >
      <div
       className={styles.conteiner_user} 
      >
        <span className={styles.title}>
          {user.first_name} {user.last_name}
        </span>
        <img
          src={`https://reqres.in/img/faces/${user.id}-image.jpg`}
          alt="user image"
          className={styles.img}
        />
        <p className={styles.email} >{user.email}</p>
      </div>
      <div className={styles.link} >
        <Link
          
          to="/users"
        >
          Back to All Users
        </Link>
      </div>
    </div>
  );
}
