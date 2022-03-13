import React from 'react';
import styles from './style.less';

interface Props {
  title: string;
  content: string;
  img: string;
}

function Card({ title, content, img }: Props) {
  return (
    <div className={styles.cardView}>
      <img src={img} className={styles.imgsty} />
      <div className={styles.textView}>
        <div className={styles.titleBox}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{content}</div>
        </div>
        <p className={styles.linkMore}>了解详情</p>
      </div>
    </div>
  );
}

export default Card;
