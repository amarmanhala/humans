import React from 'react'
import FilterByAlphabetically from './FilterByAlphabetically'
import HumanCard from './HumanCard'
import Notifications from './Notifications'
import Search from './Search'
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <Notifications></Notifications>
      <Search></Search>
      <FilterByAlphabetically></FilterByAlphabetically>
      <HumanCard></HumanCard>
    </div>
  )
}
