import React from 'react'
import z2Img from '../../image/z2.png'
import SigleItem from '../sigleItem'
import styles from './style.less'

interface Props {
  list: any[]
  titleImg: string
  id: string
}

function GorupTwo({ list, titleImg, id }: Props) {
  return (
    <div className={styles.groupTwoView} id={id}>
      <div className={styles.titleImgView}>
        <img src={titleImg} />
      </div>
      <div className={styles.moreText}>更多 》</div>
      <div className={styles.infoBox}>
        {list?.map(item => {
          const { img, content } = item || {}
          return <SigleItem content={content} img={img} width={381} height={269} />
        })}
      </div>
    </div>
  )
}

export default GorupTwo
