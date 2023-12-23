import axios from "axios";
import cls from "../Brands/brands.module.css";
import stl from "./RecommendationProducts.module.css";
import { useEffect, useState } from "react";
import { ReccomendationProductSectionLogo, LikeLogo,ChartLogo } from '../svg';
import Link from 'next/link';

//https://api.brandstore.uz/api/home 200 so'm
//type: "max_price_half_million 500so'm
// type: "max_price_million 1 mln

// export default function CheapProduct() {
//   const [two, setData] = useState([]);
//   const [five, setFive] = useState([]);
//   const [oneMln, setOneMln] = useState([]);
//   const [tab, setTab] = useState(1);

//   useEffect(() => {
//     axios
//       .get("https://api.brandstore.uz/api/home", {
//         params: {
//           type: "max_price_two_hundred_thousands",
//         },
//       })
//       .then((r) => {
//         console.log(r.data.data, "res");
//         setData(r.data.data.product_request);
//       });
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://api.brandstore.uz/api/home", {
//         params: {
//           type: "max_price_half_million",
//         },
//       })
//       .then((r) => {
//         // console.log(r.data.data, "res");
//         setFive(r.data.data.product_request);
//       });
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://api.brandstore.uz/api/home", {
//         params: {
//           type: "max_price_million",
//         },
//       })
//       .then((r) => {
//         // console.log(r.data.data, "res");
//         setOneMln(r.data.data.product_request);
//       });
//   }, []);

//   return (
//     <>
//       <div className='container'>
//         <div className={sty.cheapProduct_all_item}>
//           <div className={sty.cheapProduct_title}>
//             <div className={sty.cheapProcuct_round_prt}>
//               <p>%</p>
//             </div>
//             <div className={sty.cheapProduct_title_item}>
//               <span>Brandstore</span>
//               <p>Pекомендует</p>
//             </div>        
//           </div>
//           <div className={sty.cheapProduct_tab}>
//             {tab == 1 && (
//               <div className={sty.cheapProduct_container}>
//                 {two.length &&
//                   two.map((item) => (
//                     <div className={sty.cheap_img} key={item.id}>
//                       <img
//                         className={sty.cheapProduct_img}
//                         src={item.images[0].url}
//                       />
//                       <p>{item.name}</p>
//                       <div className={sty.cheapProduct_item_price}>
//                         <div>
//                           <span className={sty.span}>
//                             {item.random_shop.monthly_price} so'm / oy
//                           </span>
//                           <p>{item.random_shop.price} So'm</p>
//                         </div>

//                         <button>Qo'shish</button>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//           <div className={sty.cheapProduct_tab}>
//             {tab == 2 && (
//               <div className={sty.cheapProduct_container}>
//                 {five.length &&
//                   five.map((item) => (
//                     <div className={sty.cheap_img} key={item.id}>
//                       <img
//                         className={sty.cheapProduct_img}
//                         src={item.images[0].url}
//                       />
//                       <p>{item.name}</p>
//                       <div className={sty.cheapProduct_item_price}>
//                         <div>
//                           <span className={sty.span}>
//                             {item.random_shop.monthly_price} so'm / oy
//                           </span>
//                           <p>{item.random_shop.price} So'm</p>
//                         </div>

//                         <button>Qo'shish</button>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//           <div className={sty.cheapProduct_tab}>
//             {tab == 3 && (
//               <div className={sty.cheapProduct_container}>
//                 {oneMln.length &&
//                   oneMln.map((item) => (
//                     <div className={sty.cheap_img} key={item.id}>
//                       <img
//                         className={sty.cheapProduct_img}
//                         src={item.images[0].url}
//                       />
//                       <p>{item.name}</p>
//                       <div className={sty.cheapProduct_item_price}>
//                         <div>
//                           <span className={sty.span}>
//                             {item.random_shop.monthly_price} so'm / oy
//                           </span>
//                           <p>{item.random_shop.price} So'm</p>
//                         </div>

//                         <button>Qo'shish</button>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function RecommendationProducts(){
  const [data, setData]=useState([]);

  useEffect(()=>{
      axios
      .get('https://api.brandstore.uz/api/home', {
          params:{
              type:"recommended_products",
          },
      })
      .then((r)=>{
          console.log(r.data.data,"res");
          setData(r.data.data.product_request)
      })
  },[]);

  return(
      <>
     <section className={`${cls.sectionBrands} ${stl.sectionRecomend}`}>
      <div className="container">
          <div className={cls.brandAndReccomendNavPart}>
              <div className={cls.sectionName}>
                  <div className={cls.yourBrandSectionLogo}><ReccomendationProductSectionLogo/></div>
                  
                  <span>
                      <p>brandstore</p>
                      <p>рекомендует</p>
                  </span>
              </div>
              <button>Смотреть всё</button>
          </div>

            <div className={stl.ReccomendationProductsWrapper}>
                 <ul className={stl.ReccomendationProducts}>
             
                    <li className={stl.ReccomendationProductsItem} >
                        <Link href="#">
                            <div className={stl.likeLogo}><LikeLogo/> <ChartLogo/> </div>
                            <div className={stl.ReccomendationProductsImage}><img src="https://picsum.photos/240" alt="" /></div>
                        </Link>
                    </li>
 
           
          </ul>
            </div>
         
      </div>
     </section>
      </>
  )
}


