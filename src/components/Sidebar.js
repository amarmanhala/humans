import React from 'react'
import Search from './Search'
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <Search></Search>
    </div>
  )
}
