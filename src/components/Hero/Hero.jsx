import styles from './Hero.module.css';


export default function Hero () {
  return (
    <div className={'p-16 md:flex bg-white '}>
      <div className='flex-1'>
        <h1 className='text-6xl text-pink-400'>Covid ID</h1>
        <p className='mb-5 text-blue-500'>Monitoring Perkembangan Covid</p>
        <p className='mb-8'>Temukan informasi terbaru tentang pandemi Covid-19 dan langkah-langkah pencegahan yang dapat Anda lakukan.</p>
        <button className={styles.button}>vaccine</button>
      </div>
      <div className='flex-[2] flex justify-end'>
        <img className='max-w-[400px]' src="/img/hero.svg" alt="" />
      </div>
    </div>
  )
}