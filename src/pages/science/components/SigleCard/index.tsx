import React from 'react'
import rightImg from '../../images/right.png'
import styles from './styles.less'

interface Props {
  img: string
  title: string
}

function index({ img, title }: Props) {
  return (
    <div className={styles.sigleCard}>
      <img src={img} className={styles.imgSty} />
      <div className={styles.title}>{title}</div>
      <div className={styles.detail}>
        <span>详情</span>
        <img src={rightImg} />
      </div>
    </div>
  )
}

export default index
