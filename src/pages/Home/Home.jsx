import { useState } from "react";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Hero from "../../components/Hero/Hero";
import Indonesia from "../../components/Indonesia/Indonesia";
import Navbar from "../../components/Navbar/Navbar";
import Province from "../../components/Provinces/Province";

import data_p from "../../utils/constants/provinces"
import data_i from "../../utils/constants/indonesia"

function HomePage() {
  const [province_data, setprovince]=useState(data_p)
  const [indonesia_data, setindonesia]=useState(data_i)
  return (
   <>
   <Navbar/>
   <Hero/>
   <Indonesia data={indonesia_data}/>
   <Province data={province_data}/>
   <Form provincestate={[province_data, setprovince]}
   indonesiastate={[indonesia_data, setindonesia]}
   />
   <Footer/>
   </>
  );
}

export default HomePage;
