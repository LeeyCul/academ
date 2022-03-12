import Header from '@/components/header';
import Footer from '@/components/footer';
import GroupOne from './components/groupOne'
import GroupTwo from './components/groupTwo'
import bannerImg from './image/banner.png'
import titleImg from './image/z1.png'
import title1Img from './image/z2.png'
import title2Img from './image/z3.png'
import C1 from './image/c1.png'
import C2 from './image/c2.png'
import C3 from './image/c3.png'

import styles from './index.less';

const menuList = [
  { text: '品种', key: 0, id: 'pz' },
  { text: '技术', key: 1, id: 'js' },
  { text: '成果', key: 2, id: 'cg' },
]

const list = [
  { content: '首个中国菰染色体水平基因组组装和落粒性...', img: C1 },
  { content: '首个中国菰染色体水平基因组组装和落粒性...', img: C2 },
  { content: '首个中国菰染色体水平基因组组装和落粒性...', img: C3 },
]

export default function IndexPage() {
  return (
    <div className={styles.publicityView}>
      <Header title='成果宣传' menu={menuList} backGround='#00A186' />
      <div className={styles.bannerView}>
        <img src={bannerImg} className={styles.bannerImg} />
        <div className={styles.bannerText}>
          <span className={styles.bannerTitle}>创新驱动发展</span>
          <span>农业的出路在现代化，农业现代化关键在科技进步和创新。成果宣传板<br />块致力于汇聚农业和农村经济重大科技研究成果，助力农业内涵式发展</span>
        </div>
      </div>
      <div className={styles.titleImgView} id='pz'>
        <img src={titleImg} />
      </div>
      <GroupOne />
      <GroupTwo titleImg={title1Img} list={list} id='js' />
      <GroupTwo titleImg={title2Img} list={list} id='cg' />
      <Footer />
    </div>
  );
}
