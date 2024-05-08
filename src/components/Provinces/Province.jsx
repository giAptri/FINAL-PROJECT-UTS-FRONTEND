import styles from './Province.module.css';


export default function Province({data}) {
    return (
        <section className='p-8'>
            <header className='text-center mb-12'>
                <h2 className='mb-2 text-3xl font-bold text-pink-300'>PROVINCE</h2>
                <p className='text-blue-400'>Data Covid Berdasarkan Provinsi</p>
            </header>
            <div className='m-auto w-fit'>
                <table>
                    <thead className='bg-pink-400 text-white'>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Di Rawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.provinces.map((provinsi, index) => {
                            return (
                                <tr className='even:bg-slate-200'>
                                    <td>{index + 1}</td>
                                    <td>{provinsi.kota}</td>
                                    <td>{provinsi.kasus}</td>
                                    <td>{provinsi.sembuh}</td>
                                    <td>{provinsi.dirawat}</td>
                                    <td>{provinsi.meninggal}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}