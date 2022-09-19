import React from 'react'
import styles from "./HumanCard.module.css"
import {ChevronRightIcon} from "@primer/octicons-react"

export default function HumanCard() {
  return (
    <div className={styles.wrapper}><div className={styles.innerWrapper}>
      <div className={styles.avatarWrapper}>
      <div className={styles.innerAvatarWrapper}><svg version="1.1" x="0px" y="0px" viewBox="0 -5 90 90"><path fill="#0EADFF" stroke="rgba(0,0,0,0.2)" stroke-width="1.5" d="M45,85.1c10.8,0,20.8-3.8,28.6-10.2c-1.4-2.1-3-3.6-4.7-5c-5.2-4.1-12.6-5.6-17.7-6.5l-0.2-2 c7.8-4.6,9.7-9.5,12.8-19.8l0.1-0.7c0,0,2.7-1.1,3.1-6.1c0.6-6.8-2.2-4.8-2.2-5.3C65.1,26,65,21.4,64,18c-2.1-7.3-9.2-13.1-19-13.1 S28.1,10.6,26,18c-1,3.4-1.1,8-0.8,11.6c0,0.5-2.7-1.5-2.2,5.3c0.4,5,3.1,6.1,3.1,6.1l0.1,0.7c3.1,10.3,5,15.2,12.8,19.8l-0.2,2 c-5,0.9-12.5,2.4-17.7,6.5c-1.7,1.4-3.3,2.9-4.7,5C24.2,81.3,34.2,85.1,45,85.1z"></path></svg></div>
      </div>

<div className={styles.detailWrapper}>
  <span className={styles.name}>Amarpreet Singh</span>
  <span className={styles.status}>Deactivated</span>
</div>
<div className={styles.actionsWrapper}>
<ChevronRightIcon size="small" fill="var(--fg-muted)" />
</div>

      </div></div>
  )
}
