import React from 'react'
import SigleItem from '../sigleItem'
import p1mg from '../../image/p1.png'
import p2mg from '../../image/p2.png'
import p3mg from '../../image/p3.png'
import p4mg from '../../image/p4.png'
import p5mg from '../../image/p5.png'
import styles from './style.less'

const list = [
  { content: '一站式服务平台，为科研人员提供查新、咨...', img: p2mg },
  { content: '一站式服务平台，为科研人员提供查新、咨...', img: p3mg },
  { content: '一站式服务平台，为科研人员提供查新、咨...', img: p4mg },
  { content: '一站式服务平台，为科研人员提供查新、咨...', img: p5mg },
]

function GroupOne() {
  return (
    <div className={styles.grouponeView}>
      <div className={styles.moreText}>更多 》</div>
      <div className={styles.contentView}>
        <div className={styles.leftBox}>
          <img src={p1mg} />
          <div className={styles.info}>
            <p>农科服务</p>
            <span>一站式服务平台，为科研人员提供查新、咨询、规划、检测、加工等多方位服务信息</span>
          </div>
        </div>
        <div className={styles.rightBox}>
          {list?.map(item => {
            return <SigleItem img={item?.img} content={item?.content} />
          })}
        </div>
      </div>

    </div>
  )
}

export default GroupOne
