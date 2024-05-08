import styles from './Navbar.module.css';


export default function Navbar () {
  return (
    <div className={`${styles.container} text-white bg-pink-400 flex justify-between px-20 py-4`}>
      <a className='text-2xl font-bold' href="/">Covid id</a>
      <nav>
        <ul className='flex gap-6'>
            <li><a href="">Global</a></li>
            <li><a href="">Indonesia</a></li>
            <li><a href="">Provinsi</a></li>
            <li><a href="">About</a></li>
        </ul>
      </nav>
    </div>
  )
}