import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import bannerImg from './images/banner.png'
import b2 from './images/b1.png'
import b1 from './images/b2.png'
import g1Img from './images/g1.png'
import g2Img from './images/g2.png'
import g3Img from './images/g3.png'
import g4Img from './images/g4.png'
import g5Img from './images/g5.png'
import w1 from './images/w1.png'
import w2 from './images/w2.png'
import w3 from './images/w3.png'
import w4 from './images/w5.png'
import x1 from './images/x1.png'
import x2 from './images/x2.png'
import x3 from './images/x3.png'
import x4 from './images/x4.png'
import f1 from './images/f1.png'
import f2 from './images/f2.png'
import f3 from './images/f3.png'
import f4 from './images/f4.png'
import f5 from './images/f5.png'
import f6 from './images/f6.png'
import f7 from './images/f7.png'
import f8 from './images/f8.png'
import qy1 from './images/qy1.png'
import qy2 from './images/qy2.png'
import qy3 from './images/qy3.png'
import qy4 from './images/qy4.png'
import Card from './components/Card'
import CardJs from './components/CardJs'
import CardXq from './components/CardXq'
import CardFw from './components/CardFw'
import Company from './components/Company'
import styles from './style.less'

const menuList = [
  { text: '常见问题', key: 0, id: 'wt' },
  { text: '技术供计', key: 1, id: 'js' },
  { text: '技术需求', key: 2, id: 'xq' },
  { text: '贴心服务', key: 3 },
  { text: '入驻企业', key: 4, id: 'rz' },
]

const cardList = [
  { num: '1500+', img: g1Img, content: ['平台展现量'] },
  { num: '1.3亿', img: g2Img, content: ['103个国家共计', '132亿条成果数据'] },
  { num: '10000+', img: g3Img, content: ['1000余条国内高端', '外技术成果'] },
  { num: '10+', img: g4Img, content: ['10年行业技术交易', '线上线下推广经验'] },
  { num: '100+', img: g5Img, content: ['年均促成100余国', '内外技术成果对接'] },
]

const questionList = [
  '专利转让需多少钱？',
  '专利转让需多少钱？',
  '成果转让的详细流程',
  '买一个成果需要多长时间？',
  '成果技术如何快速转让？',
  '如何快速购买成果'
]

const fwList = [
  { img: x1, conten: '场地办公' },
  { img: x2, conten: '项目服务' },
  { img: x3, conten: '宣传推介' },
  { img: x4, conten: '开放实验室' },
  { img: f1, conten: '工商服务' },
  { img: f2, conten: '财税管理' },
  { img: f3, conten: '人力资源' },
  { img: f4, conten: '法律咨询' },
  { img: f5, conten: '技术服务' },
  { img: f6, conten: '创业辅导' },
  { img: f7, conten: '投融资服务' },
  { img: f8, conten: '知识产权服务' },
]

const companyList = [
  { img: qy1, title: '北京农业生物科学技术与畜牧...', content: '北京农业生物技术研究中心(下称生物中心)成立于1998年9月,是北京市属唯一专门...' },
  { img: qy2, title: '北京农业生物科学技术与畜牧...', content: ' 由市外侨办牵头组织,3月13日,荷兰瓦赫宁根大学及研究中心与食品谷集团在富华...' },
  { img: qy3, title: '国际玉米小麦改良中心-北京办...', content: '国际玉米小麦改良中心北京办事处介绍: 组织、协调国际玉米小麦改良中心(CIMMY...' },
  { img: qy4, title: '国际马铃薯中心北京办事处', content: '国际马铃薯中心北京联络处,于1985-11-09在北京市注册成立,属于租赁和商务服务业,...' },
]

const TitleImg = ({ img, id }: { img: string, id?: string }) => {
  return <div className={styles.titleImgView} id={id}>
    <img src={img} />
  </div>
}

interface SigleQuestionProps {
  index: number
  content: string
}
const SigleQuestion = ({ index, content }: SigleQuestionProps) => {
  return <div className={styles.questionView}>
    <span className={styles.num}>0{index + 1}</span>
    <span>{content}</span>
  </div>
}

function index() {
  return (
    <div className={styles.translationView}>
      <Header title='成果转化' menu={menuList} backGround='rgba(24, 191, 110, 0.8799999952316284)' />
      <div className={styles.bannerView}>
        <img src={bannerImg} className={styles.bannerImg} />
        <div className={styles.bannerText}>
          <span className={styles.bannerTitle}>供需对接 转化交易</span>
          <span>发挥市场在资源配置中的决定性作用   促进科技成果与产业发展紧密结合</span>
        </div>
      </div>
      <div className={styles.cardsView}>
        {cardList?.map((item, index) => <Card key={index}  {...item} />)}
      </div>
      <TitleImg img={w1} id='wt' />
      <div className={styles.questionViews}>
        {questionList?.map((item, index) => <SigleQuestion key={index} index={index} content={item} />)}
      </div>
      <TitleImg img={w2} id='js' />
      <div className={styles.jsBox}>
        <p className={styles.moreText}>更多&nbsp;》</p>
        <div className={styles.cardJsList}>
          {Array.from(new Array(6).fill(1))?.map((item, index) => {
            return <CardJs key={index} />
          })}
        </div>
      </div>
      <img src={b1} style={{ width: '100%' }} />
      <TitleImg img={w3} id='xq' />
      <div className={styles.jsBox}>
        <p className={styles.moreText}>更多&nbsp;》</p>
        <div className={styles.cardJsList}>
          {Array.from(new Array(6).fill(1))?.map((item, index) => {
            return <CardXq key={index} />
          })}
        </div>
      </div>
      <div className={styles.fwBox}>
        <div className={styles.leftBox}>
          <CardFw data={fwList.slice(0, 4)} />
        </div>
        <div className={styles.rightBox}>
          <CardFw data={fwList.slice(4, 12)} className={styles.rightCard} widht={159} />
        </div>
      </div>
      <img src={b2} style={{ width: '100%' }} />
      <TitleImg img={w4} id='rz' />
      <div className={styles.rzBox}>
        <p className={styles.moreText}>更多&nbsp;》</p>
        <div className={styles.cardrzList}>
          {companyList.map((item, index) => {
            return <Company {...item} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index
