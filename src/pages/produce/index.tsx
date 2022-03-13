import Header from './components/header';
import Footer from '@/components/footer';
import styles from './style.less';

const list = [
  {
    id: 'lys',
    title: require('./image/title_1.png'),
    label: '粮油薯',
    leftBg: require('./image/left_1.png'),
    number: require('./image/1.png'),
    leftList: ['推荐', '调料', '干杂', '肉类', '干货', '水果'],
    leftHover: styles.yellowHover,
    contentList: [
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
      {
        price: '￥134.71',
        sale: '￥142.40',
        image: require('./image/produce_4.png'),
        title: '佰多力（Abaco）特级初榨橄榄油 3L 铁听含手提袋 西班牙...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
      {
        price: '￥134.71',
        sale: '￥142.40',
        image: require('./image/produce_4.png'),
        title: '佰多力（Abaco）特级初榨橄榄油 3L 铁听含手提袋 西班牙...',
        selfSupport: true,
      },
    ],
  },
  {
    id: 'gsc',
    title: require('./image/title_2.png'),
    label: '果蔬茶',
    leftBg: require('./image/left_2.png'),
    number: require('./image/2.png'),
    leftList: ['推荐', '干果', '肉果'],
    leftHover: styles.redHover,
    contentList: [
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
      {
        price: '￥134.71',
        sale: '￥142.40',
        image: require('./image/produce_4.png'),
        title: '佰多力（Abaco）特级初榨橄榄油 3L 铁听含手提袋 西班牙...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
      {
        price: '￥134.71',
        sale: '￥142.40',
        image: require('./image/produce_4.png'),
        title: '佰多力（Abaco）特级初榨橄榄油 3L 铁听含手提袋 西班牙...',
        selfSupport: true,
      },
    ],
  },
  {
    label: '蚕桑',
    id: 'sc',
    title: require('./image/title_3.png'),
    leftBg: require('./image/left_3.png'),
    number: require('./image/3.png'),
    leftList: ['推荐', '干果', '肉果'],
    leftHover: styles.greenHover,
    contentList: [
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
      {
        price: '￥134.71',
        sale: '￥142.40',
        image: require('./image/produce_4.png'),
        title: '佰多力（Abaco）特级初榨橄榄油 3L 铁听含手提袋 西班牙...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
    ],
  },
  {
    id: 'zyc',
    title: require('./image/title_4.png'),
    leftBg: require('./image/left_4.png'),
    number: require('./image/4.png'),
    leftList: ['推荐'],
    leftHover: styles.brownHover,
    contentList: [
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
      {
        price: '￥134.71',
        sale: '￥142.40',
        image: require('./image/produce_4.png'),
        title: '佰多力（Abaco）特级初榨橄榄油 3L 铁听含手提袋 西班牙...',
        selfSupport: true,
      },
    ],
  },
  {
    label: '果汁酒',
    id: 'gzj',
    title: require('./image/title_5.png'),
    leftBg: require('./image/left_5.png'),
    number: require('./image/5.png'),
    leftHover: styles.blueHover,
    leftList: ['推荐'],
    contentList: [
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
      {
        price: '￥134.71',
        sale: '￥142.40',
        image: require('./image/produce_4.png'),
        title: '佰多力（Abaco）特级初榨橄榄油 3L 铁听含手提袋 西班牙...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        sale: '￥300.40',
        image: require('./image/produce_1.png'),
        title: '贝蒂斯（BETIS）特级初榨橄榄油年货礼盒装春节送礼 食...',
        selfSupport: true,
      },
      {
        price: '￥291.00',
        image: require('./image/produce_2.png'),
        title: '品利（MUELOLIVA）特级初榨橄榄油 5L 西班牙原装进口冷压榨...',
      },
      {
        price: '￥211.41',
        sale: '￥222.40',
        image: require('./image/produce_3.png'),
        title: '贝蒂斯（BETIS）橄榄油 食用油 西班牙原装进口 2.5L ...',
        selfSupport: true,
      },
    ],
  },
];

function index() {
  return (
    <div className={styles.serveView}>
      <Header />
      {list.map(
        (
          {
            title,
            leftBg,
            leftList,
            leftHover,
            contentList,
            number,
            label,
            id,
          },
          index,
        ) => (
          <div className={styles.contentItem} key={index} id={id}>
            <img src={title} className={styles.title} />
            <div className={styles.contentBox}>
              <div className={styles.leftMenu}>
                <img src={leftBg} className={styles.leftBg} />
                <img src={number} className={styles.number} />
                <h2>{label}</h2>
                <div className={styles.menuList}>
                  {leftList.map((item) => (
                    <p className={leftHover}>{item}</p>
                  ))}
                </div>
              </div>
              <div className={styles.rightList}>
                {contentList.map(
                  ({ price, sale, image, title, selfSupport }, index) => (
                    <div key={index} className={styles.rightItem}>
                      <div className={styles.rightItemWrapper}>
                        <img src={image} />
                        <p className={styles.titleLabel}>
                          {selfSupport && (
                            <span className={styles.selfLabel}>自营</span>
                          )}
                          {title}
                        </p>
                        <p>
                          <span className={styles.originPrice}>{price}</span>
                          <del className={styles.salePrice}>{sale}</del>
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        ),
      )}
      <Footer />
    </div>
  );
}

export default index;
