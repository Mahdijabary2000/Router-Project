import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Users.module.css"



export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((respons) => respons.json())
      .then((json) => setUsers(json.data));
  }, []);

  return (
    <div>
      <h1 className={styles.tilte} >All Users</h1>
      <div >
        <ul className={styles.user_items} >
          {users.map((user, index) => {
            return (
              <li key={`user ${index}`} className={styles.user_item} >
                <span className={styles.user_title}>{user.first_name} {user.last_name}</span>
                <img src={`https://reqres.in/img/faces/${user.id}-image.jpg`} alt="user image" className={styles.user_image} />
                <Link
                  className={styles.user_link}
                  to={`/users/${user.id}`}
                >
                  See more
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.container} >
        <Link
           className={styles.link}
          to="/"
        >
           to Home
        </Link>
      </div>
    </div>
  );
}
