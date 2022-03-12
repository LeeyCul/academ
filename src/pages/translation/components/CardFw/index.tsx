import React from 'react'
import cls from 'classnames'
import x1 from '../../images/x1.png'
import styles from './style.less'

interface CardProps {
  img: string
  conten: string
  widht?: number | string
}

const Card = ({ widht, img, conten }: CardProps) => {
  return (
    <div className={styles.sigleCardIconView} style={{ width: widht }}>
      <img src={img} />
      <div className={styles.content}>
        {conten}
      </div>
    </div>
  )
}

interface Props {
  className?: string
  widht?: number | string
  data: any[]
}

function CardFw(props: Props) {
  return (
    <div className={styles.CardFwView}>
      <div className={styles.title}>专属服务</div>
      <div className={cls(styles.contentView, props.className)}>
        {props?.data?.map((item: any, index) => {
          return <Card {...item} key={index} widht={props?.widht} />
        })}
      </div>
    </div>
  )
}

export default CardFw
