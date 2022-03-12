import React from 'react'
import contentImg from '../../images/content.png'
import styles from './styles.less'

function CardJs() {
  return (
    <div className={styles.cardJsView}>
      <img src={contentImg} className={styles.contentImg} />
      <div className={styles.cTitle}>专利名：</div>
      <div className={styles.content}>一种室海苔烘烤机及其配套设备电器</div>
      <div className={styles.cTitle}>权利人:</div>
      <div className={styles.subContent}>中国农业科学院农业质量标准与检测技术所</div>
      <div className={styles.countView}>
        <span>3213 次点击</span>
        <div className={styles.priceView}>
          <span>价格：</span>
          <span className={styles.num}>41.15万元</span>
        </div>
      </div>
      <div className={styles.btn}>
        立即咨询
      </div>
    </div>
  )
}

export default CardJs
