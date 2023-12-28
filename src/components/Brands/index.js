import axios from 'axios';
import cls from './brands.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { YourBrandSectionLogo } from '../svg';
// import YourBrandSectionLogo from '@/components/svg';


export default function Brand(){
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios
        .get('https://api.brandstore.uz/api/home', {
            params:{
                type:"brand",
            },
        })
        .then((r)=>{
            console.log(r.data.data,"res");
            setData(r.data.data.brands)
        })
    },[]);

    return(
        <>
       <section className={cls.sectionBrands}>
        <div className="container">
            <div className={cls.brandAndReccomendNavPart}>
                <div className={cls.sectionName}>
                    <div className={cls.yourBrandSectionLogo}><YourBrandSectionLogo/></div>
                    
                    <span>
                        <p>выбери</p>
                        <p>свой бренд</p>
                    </span>
                </div>
                <button>Смотреть всё</button>
            </div>

            <ul className={cls.brandsName}>
                {data.length && data.map((item)=>(
                      <li key={item.id}><Link href="#"><img src={item.image.url} alt={item.name} /></Link></li>
   
                ))}
            </ul>
        </div>
       </section>
        </>
    )
}