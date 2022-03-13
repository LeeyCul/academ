import React, { useState } from 'react';
import cls from 'classnames';
import logoImg from '@/image/logo.png';
import styles from './style.less';
import { scrollToAnchor } from '@/utils';

const menuList = [
  { title: '粮油薯', id: 'yls' },
  { title: '果蔬茶', id: 'gsc' },
  { title: '蚕桑', id: 'sc' },
  { title: '中药材', id: 'zyc' },
  { title: '果汁酒', id: 'gzj' },
];

const iconList = [
  require('../../image/icon_oil.png'),
  require('../../image/icon_vegetable.png'),
  require('../../image/icon_sc.png'),
  require('../../image/icon_zyc.png'),
  require('../../image/icon_juice.png'),
];

function Header() {
  const Login = () => {
    return (
      <div className={styles.loginView}>
        <span>登陆</span>
        <span className={styles.line} />
        <span>注册</span>
      </div>
    );
  };

  return (
    <div className={styles.headerView}>
      <div className={styles.topHeader}>
        <div className={styles.headerInfoView}>
          <div className={styles.titleView}>
            <img src={logoImg} className={styles.logoImg} />
            <span className={styles.title}>农业产业发展综合服务云平台</span>
            <span className={styles.line} />
            <span className={styles.text}>农品优选</span>
          </div>
          <div className={styles.search}>
            <span>全站搜索</span>
            <input placeholder="关键字" />
            <img src={require('../../image/search.png')} />
          </div>
          <Login />
        </div>
        <div className={styles.menuList}>
          <div className={styles.leftMenu}>
            <div className={styles.all}>全部分类</div>
            <div className={styles.dropDown}>
              {menuList.map(({ title, id }, index) => (
                <div
                  key="title"
                  className={styles.dropDownItem}
                  onClick={() => scrollToAnchor(id)}
                >
                  <img src={iconList[index]} />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.menuTab}>
            {menuList.map(({ title, id }) => (
              <div
                key="title"
                className={styles.tabItem}
                onClick={() => scrollToAnchor(id)}
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
