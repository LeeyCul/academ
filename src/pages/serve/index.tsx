import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import bannerImg from './image/banner.png'
import titleImg from './image/title.png'
import Card from './components/Card'
import z1Img from './image/z1.png'
import z2Img from './image/z2.png'
import z3Img from './image/z3.png'
import z4Img from './image/z4.png'
import z5Img from './image/z5.png'
import z6Img from './image/z6.png'
import logo from '@/image/logo.png'
import styles from './style.less'

const list = [
  { title: '查新', content: '根据查新委托人提供的需要查证其新颖性的科学技术内容，并做出结论。', img: z1Img },
  { title: '咨询', content: '专业咨询人才团队，提供领先的战略咨询、行业研究、市场调研等综合服务。', img: z2Img },
  { title: '科研', content: '科技查新是根据查新委托人提供的需要查证其新颖性的科学技术内容，按照《科技查新技术规范》（GB/T 32003-2015）进行操作，并做出结论。', img: z3Img },
  { title: '检测', content: '科技查新是根据查新委托人提供的需要查证其新颖性的科学技术内容，按照《科技查新技术规范》进行操作，并做出结论。', img: z4Img },
  { title: '加工', content: '按照《科技查新技术规范》（GB/T 32003-2015）进行操作，并做出结论。', img: z5Img },
  { title: '技术服务', content: '这里提供的相关的板块资料文案介绍。需要查证其新颖性的科学技术内容。', img: z6Img },
]

const menuList = [
  { text: '农科服务', key: 0 },
]

function index() {
  return (
    <div className={styles.serveView}>
      <Header menu={menuList} logo={logo} title='农科服务'/>
      <div className={styles.bannerView}>
        <img src={bannerImg} className={styles.bannerImg} />
        <div className={styles.bannerText}>
          <span className={styles.bannerTitle}>企业服务</span>
          <span>一站式为企业提供科技创新服务方案</span>
        </div>
      </div>
      <div className={styles.titleImgView}>
        <img src={titleImg} />
      </div>
      <div className={styles.infoBox}>
        {list?.map(item => {
          const { title, content, img } = item
          return <Card title={title} content={content} img={img} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default index
