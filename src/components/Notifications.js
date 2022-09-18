import React from 'react'
import styles from './Notifications.module.css'

export default function Notifications() {
  return (
    <div className={styles.wrapper}><div className={styles.notification}><u>Notifications</u>&nbsp;&nbsp;<div className={styles.notificationCount}>10</div></div></div>
  )
}
