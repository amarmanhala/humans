import React from 'react'
import FilterByAlphabetically from './FilterByAlphabetically'
import HumanCard from './HumanCard'
import Notifications from './Notifications'
import Search from './Search'
import styles from "./Sidebar.module.css"
import {useWindowSize} from '../../hooks/useWindowSize'

export default function Sidebar() {
  const size = useWindowSize();
  console.log(size);
  return (
    <div className={styles.container}>
      <Notifications></Notifications>
      <Search></Search>
      { size.width > 1280 && (<FilterByAlphabetically></FilterByAlphabetically>) }
      <HumanCard></HumanCard>
    </div>
  )
}
