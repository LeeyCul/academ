import React from 'react'
import imgs from '../../images/g3.png'
import styles from './style.less'

interface Props {
  num: string
  img: string
  content: string[]
}

export default function Card({ num, img, content }: Props) {
  return (
    <div className={styles.cardView}>
      <img src={img} className={styles.imgSty} />
      <div className={styles.infoBox}>
        <span className={styles.nums}>{num}</span>
        {content.map((item, index) => <span key={index}>{item}</span>)}
      </div>
    </div>
  )
}
