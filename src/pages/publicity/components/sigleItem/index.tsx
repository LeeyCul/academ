import React from 'react'
import p2Img from '../../image/p2.png'
import styles from './style.less'

interface Props {
  content: string
  img: string
  width?: number | string
  height?: number | string
}

function SigleItem({ content, img, width, height }: Props) {
  return (
    <div className={styles.sigleItemView} style={{ width, height }}>
      <img src={img} width={width} height={height} className={styles.imgSty} />
      <div className={styles.infoText}>{content}</div>
    </div>
  )
}

export default SigleItem
