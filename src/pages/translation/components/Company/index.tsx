import React from 'react'
import styles from './style.less'

interface Props {
  img: string
  title: string
  content: string
}

function Company({ img, title, content }: Props) {
  return (
    <div className={styles.companyView}>
      <img src={img} className={styles.imgSty} />
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </div>
  )
}

export default Company
