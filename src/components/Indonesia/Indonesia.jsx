import styles from './Indonesia.module.css';
import data from '../../utils/constants/indonesia';

export default function Indonesia() {
    return (
        <section className={`${styles.container} bg-slate-200/75 text-center p-8`}>
            <header>
                <h2 className='mb-1 text-3xl font-bold text-pink-300'>INDONESIA</h2>
                <p className='mb-16 text-blue-400'>Data Covid Berdasarkan Indonesia</p>
                <div className='flex justify-around gap-8 max-w-4xl m-auto'>
                    {data.indonesia.map((status)=>{
                        return <CovidCard status={status}/>
                    })}
                </div>
            </header>
        </section>
    )
}

function CovidCard({status}) {
    return (
        <div className='bg-white flex-1 p-12 rounded-xl shadow-xl max-w-sm'>
            <p className='text-2xl font-bold'>{status.status}</p>
            <p className='text-3xl'>{status.total}</p>
        </div>
    )
} 