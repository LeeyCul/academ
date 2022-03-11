import React, { useState } from 'react'
import cls from 'classnames'
import logoImg from '@/image/logo.png'
import styles from './style.less'

interface Props {
  menu: { text: string, key: number }[]
  title: string
  backGround?: string
  logo?: string
}

interface MenuProps {
  menuList: { text: string, key: number }[]
}

interface SigleItemProps {
  text: string
  active: boolean
  onClick?: () => void
}

const SigleItem = ({ text, active, onClick }: SigleItemProps) => {
  return <div onClick={onClick} className={cls(styles.sigleText, { [styles.activeSigle]: active })}>{text}</div>
}

function Header({ menu,logo,title,backGround }:Props) {
  const [currentKey, setCurrentKey] = useState<number>(0)

  const clsName = cls(styles.headerView)

  const Menu = ({ menuList }: MenuProps) => {
    return <div className={styles.menuView}>
      {menuList?.map(item => {
        return (
          <SigleItem
            key={item?.key}
            text={item?.text}
            active={item?.key === currentKey}
            onClick={() => setCurrentKey(item?.key)}
          />
        )
      })}
    </div>
  }

  const Login = () => {
    return <div className={styles.loginView}>
      <span>登陆</span>
      <span className={styles.line} />
      <span>注册</span>
    </div>
  }

  return (
    <div className={clsName} style={{background: backGround}}>
      <div className={styles.headerInfoView}>
        <div className={styles.titleView}>
          <img src={logo || logoImg} className={styles.logoImg}/>
          <span className={styles.title}>农业产业发展综合服务云平台</span>
          <span className={styles.line} />
          <span className={styles.text}>{title}</span>
        </div>
        <Login />
      </div>
      <div className={styles.menuList}>
        <Menu menuList={menu} />
      </div>
    </div>
  )
}

export default Header
