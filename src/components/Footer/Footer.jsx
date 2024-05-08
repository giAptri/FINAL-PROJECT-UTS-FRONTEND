import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer className='flex justify-between items-center bg-pink-400 text-white px-16 py-8'>
            <div>
                <a href="/">Covid id</a>
                <p>Developed by gia</p>
            </div>
            <nav>
                <ul className='flex gap-5'>
                    <li><a href="/">Global</a></li>
                    <li><a href="/">Indonesia</a></li>
                    <li><a href="/">Provinsi</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </nav>
        </footer>
    )
}