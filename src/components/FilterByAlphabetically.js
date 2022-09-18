import React from 'react'
import styles from "./FilterByAlphabetically.module.css"

export default function FilterByAlphabetically() {
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  return (
    <div className={styles.wrapper}>
      { alphabet.map((alphabet, i) => {
        return <span key={i} className={styles.alphabet}>{alphabet}</span>
      }) }
    </div>
  )
}
