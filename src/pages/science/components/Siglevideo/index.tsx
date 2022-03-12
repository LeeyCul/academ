import React from 'react'
import styles from './style.less'

interface Props {
  title: string
  img: string
  user: string
  time: string
}

function index({ title, img, user, time }: Props) {
  return (
    <div className={styles.VideoCardView}>
      <img src={img} className={styles.imgSty} />
      <div className={styles.title}>{title}</div>
      <div className={styles.userInfo}>
        <span>{user}</span>
        <span className={styles.yuan}></span>
        <span>{time}</span>
      </div>
    </div>
  )
}

export default index
