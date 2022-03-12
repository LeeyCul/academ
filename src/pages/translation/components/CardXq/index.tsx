import React from 'react'
import styles from './style.less'
function index() {
  return (
    <div className={styles.cardxqView}>
      <div className={styles.title}>
        一种元藿即食加工技术相关研究结果
      </div>
      <div className={styles.subTitle}>需求描述：</div>
      <div className={styles.content}>
        进行血耳菌种培植试验，培育出优质高产的菌种，解决血耳人工栽培产量低的问题。保康能够大面积人工栽培血耳...
      </div>
      <div className={styles.tag}>有效期：不限</div>
      <div className={styles.info}>2022-01-12 发布</div>
      <div className={styles.info}>3213 次点击</div>
      <div className={styles.infobox}>
        <span>价格:</span>
        <span className={styles.price}>40-45万元</span>
      </div>
      <div className={styles.btn}>立即咨询</div>
    </div>
  )
}

export default index
