import Image from 'next/image';
import styles from './page.module.css';
export default function Home() {
  return (
    <main>
      <section className={styles.main}>
        <div className={styles.section}>
          <div className={styles.left}>
            <h3>Explain To You How All This</h3>
            <h2>
              Business Value Through
              <span>Digital Products</span>
            </h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the.
            </p>
            <button>Show More</button>
            <div></div>
          </div>
          <div className={styles.right}>
            <Image
              src={
                'https://demo.phlox.pro/agency-digital-2/wp-content/uploads/sites/260/2020/12/Polygon-hero-right.svg'
              }
              height={68.5}
              width={68.5}
              className={styles.firstImage}
            ></Image>
            <Image
              src={
                'https://demo.phlox.pro/agency-digital-2/wp-content/uploads/sites/260/2020/12/Polygon-hero-right.svg'
              }
              height={41.61}
              width={41.61}
              className={styles.secondImage}
            ></Image>
            <img
              src={
                'https://demo.phlox.pro/agency-digital-2/wp-content/uploads/sites/260/2020/12/hero-img.jpg'
              }
              className={styles.thirdImage}
            ></img>
            <div className={styles.rightdiv}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
