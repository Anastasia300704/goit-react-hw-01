//import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt="Friend avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default FriendListItem;

