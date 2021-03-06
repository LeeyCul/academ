import React, { useState } from 'react'
import dayjs from 'dayjs'
import cls from 'classnames'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BannerImg from './images/banner.png'
import title1Img from './images/t1.png'
import title2Img from './images/t2.png'
import title3Img from './images/t3.png'
import zxImg from './images/zx.png'
import rmImg from './images/rm.png'
import v1Img from './images/v1.png'
import v2Img from './images/v2.png'
import v3Img from './images/v3.png'
import v4Img from './images/v4.png'
import zt1Img from './images/zt1.png'
import zt2Img from './images/zt2.png'
import zt3Img from './images/zt3.png'
import styles from './style.less'
import { scrollToAnchor } from '@/utils'
import Siglevideo from './components/Siglevideo'
import SigleCard from './components/SigleCard'

const list = [
  { text: '最新发布', key: 0, id: 'zx' },
  { text: '热门视频', key: 1, id: 'rm' },
  { text: '专题学习', key: 2, id: 'zt' },
]

const zxList = [
  { time: '2022-02-24', title: '西南地区农产品品牌化发展模式系列报道短片', subTitle: '品牌化发展模式介绍' },
  { time: '2022-02-02', title: '四川凉山 脱贫增收路上的“农科印记”', subTitle: '[战疫情特别报道]' },
  { time: '2022-01-16', title: '夏粮陆续进入成熟期，南北实况视频', subTitle: '西南麦区喜获丰收' },
  { time: '2022-01-15', title: '夏粮陆续进入成熟期，南北实况视频', subTitle: '西南麦区喜获丰收' },
]
const rmList = [
  { time: '2022-02-24', title: '豚草天敌广聚萤叶甲耐寒性快速适应的生理与分子遗传机制', user: '周忠实', img: v1Img },
  { time: '2022-02-24', title: '首个中国菰染色体水平基因组组装和落粒性相关基因鉴定完成', user: '周忠实', img: v2Img },
  { time: '2022-02-24', title: '研究破解小麦遗传转化中基因型依赖性难题', user: '周忠实', img: v3Img },
  { time: '2022-02-24', title: '机器学习模型直接预测农药等农业污染物在植物根系的累积', user: '周忠实', img: v4Img },
]

const ztList = [
  { title: '《脱贫攻坚：黄河大合唱》专题纪录片', img: zt1Img },
  { title: '18大乡村振兴美丽乡村 科技农业现代脱贫攻坚专题', img: zt2Img },
  { title: '【专题片】贵州省农业委员会脱贫攻坚工作纪实《依靠党建引领 助推脱贫攻坚》', img: zt3Img },
]

interface ZxSigleItemProps {
  time: string
  title: string
  subTitle: string
}

const ZxSigleItem = ({ time, title, subTitle }: ZxSigleItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <div className={styles.ZxSigleItemView} onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <div className={styles.timeBox}>
        <span className={cls(styles.days, { [styles.hover]: isHover })}>{dayjs(time).format('DD')}</span>
        <span className={cls(styles.year, { [styles.hover]: isHover })}>{dayjs(time).format('YY-DD')}</span>
      </div>
      <div className={styles.infoBox}>
        <span className={cls(styles.title, { [styles.hover]: isHover })}>{title}</span>
        <span className={styles.subTitle}>{subTitle}</span>
      </div>
    </div>
  )
}

function index() {
  return (
    <div className={styles.scienceView}>
      <Header menu={list} title='科技微观' backGround='rgba(176, 196, 26, 0.8799999952316284)' />
      <div className={styles.bannerView} onClick={() => scrollToAnchor('zt')}>
        <img src={BannerImg} className={styles.bannerImg} />
        <div className={styles.bannerText} >
          {/* <span className={styles.bannerTitle}>创新驱动发展</span> */}
          {/* <span>寻找你关心的资讯</span> */}
        </div>
      </div>
      <div className={styles.titleImgView} id='zx'>
        <img src={title1Img} />
      </div>
      <div className={styles.zxBox}>
        <p className={styles.moreText}>更多&nbsp;》</p>
        <div className={styles.contentView}>
          <img src={zxImg} className={styles.zxImg} />
          <div>
            {zxList.map((item, index) => {
              return <ZxSigleItem key={index} {...item} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.titleImgView} id='rm'>
        <img src={title2Img} />
      </div>
      <div className={styles.rmBox}>
        <p className={styles.moreText}>更多&nbsp;》</p>
        <div className={styles.rmContentView}>
          <img src={rmImg} className={styles.rmImg} />
          <div className={styles.rightBox}>
            {rmList?.map((item, index) => {
              return <Siglevideo key={index}  {...item} />
            })}
          </div>
        </div>
      </div>
      <div className={styles.titleImgView} id='zt'>
        <img src={title3Img} />
      </div>
      <div className={styles.ztBox}>
        <p className={styles.moreText}>更多&nbsp;》</p>
        <div className={styles.ztContentView}>
          {ztList.map((item, index) => {
            return <SigleCard key={index} {...item} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index
