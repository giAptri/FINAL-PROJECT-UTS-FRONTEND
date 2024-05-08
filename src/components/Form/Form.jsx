import styles from './Form.module.css';

export default function Form({ provincestate, indonesiastate }) {
    const [province_data, setprovince] = provincestate
    const [indonesia_data, setindonesia] = indonesiastate
    function submitHandler() {
        event.preventDefault();

        const input_status = document.getElementById('status').value
        const input_provinsi = document.getElementById('provinsi').value
        const input_jumlah = parseInt(document.getElementById('jumlah').value)
    
        const new_provincedata = {...province_data};
        new_provincedata.provinces[input_provinsi][input_status] += input_jumlah


        const new_indonesiadata = {...indonesia_data};
        if(input_status == 'kasus' || input_status == 'dirawat'){
            new_indonesiadata.indonesia[0].total += input_jumlah
        }
        else if(input_status == 'sembuh' || input_status == 'sembuh'){
            new_indonesiadata.indonesia[1].total += input_jumlah
        }
        else if(input_status == 'meninggal' || input_status == 'meninggal'){
            new_indonesiadata.indonesia[2].total += input_jumlah
        }

        setprovince(new_provincedata);
        setindonesia(new_indonesiadata);
    }



    return (
        <div className="flex bg-slate-200/75 p-16 gap-16">
            <div className='flex-1 flex justify-center'>
                <img className='' src="/img/Image.svg" alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-4xl font-bold text-pink-300'>FORM COVID</h2>
                <form onSubmit={submitHandler} className='flex flex-col'>
                    <label htmlFor="provinsi">Provinsi</label>
                    <select className={styles.form__input} name="" id="provinsi" required>
                        <option value="">Pilih Provinsi</option>
                        {province_data.provinces.map((province, index) => {
                            return (
                                <option value={index}>
                                    {province.kota}
                                </option>
                            )
                        })}
                    </select>

                    <label htmlFor="status">Status</label>
                    <select className={styles.form__input} name="" id="status" required>
                        <option value="">pilih status</option>
                        <option value="kasus">kasus</option>
                        <option value="sembuh">sembuh</option>
                        <option value="meninggal">meninggal</option>
                        <option value="dirawat">dirawat</option>
                    </select>

                    <label htmlFor="jumlah">Jumlah</label>
                    <input className={styles.form__input} type="number" id="jumlah" name="jumlah" required/><br />

                    <button className={styles.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}