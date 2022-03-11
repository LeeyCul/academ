import React from 'react'
import logo1 from '@/image/logo1.png'
import QrCode from '@/image/code.png'
import styles from './style.less'

function Footer() {
  return (
    <div className={styles.footerView}>
      <div className={styles.leftBox}>
        <img src={logo1} className={styles.lgImg}/>
        <p>copyright©2015-2020 四川省农业科技成果转化公共服务平台</p>
        <p>主办单位：四川省农业科学院   四川省农业科学院农业信息与农村经济研究所</p>
        <p>技术支持电话：028-84504191 028-84504881</p>
        <p>备案编号：川ICP备13075047号</p>
      </div>
      <div className={styles.rightBox}>
        <img src={QrCode}/>
      </div>
    </div>
  )
}

export default Footer
