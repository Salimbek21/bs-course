import axios from "axios";
import cls from "../Brands/brands.module.css";
import stl from "./RecommendationProducts.module.css";
import { useEffect, useState } from "react";
import { ReccomendationProductSectionLogo, LikeLogo,ChartLogo,BucketLogo,ArrowLogo } from '../svg';
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
//   const [additionData, setAdditionData]=useState([]);

  useEffect(()=>{
      axios
      .get('https://api.brandstore.uz/api/home', {
          params:{
              type:"recommended_products",
          },
      })
      .then((r)=>{
          console.log(r.data.data.product_request,"res");
          setData(r.data.data.product_request)
      })

    //   axios
    //   .get('https://brandstore.uz/_next/data/o43ZcItdFPrzoUswbpf0G/uz/productPage/keys-asus-rog-strix-helios-gx601-white-edition.json?product=keys-asus-rog-strix-helios-gx601-white-edition')
    //   .then((response)=>{
    //       console.log(response,"response");
    //       setAdditionData(response)
    //   })

  },[]);

  return(
      <>
     <section className={`${cls.sectionBrands} ${stl.sectionRecommend}`}>
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

            <div className={stl.recommendationProductsWrapper}>
                 <ul className={stl.recommendationProducts}>
                 {data.length && data.slice(0,6).map((item)=>(

                    <li key={item.id} className={stl.recommendationProductsItem} >
                        <Link href="#">
                            <div className={stl.likeLogo}><LikeLogo/> <ChartLogo/> </div>
                            <div className={stl.recommendationProductsImage}><img src={item.images[0].url} alt={item.name} /></div>
                            <div className={stl.recommendProductInfo}>
                                <div className={stl.recommendProductTitle}>
                                    <p>{item.class.name}</p>
                                    <p>{item.name}</p>
                                </div>
                                <div className={stl.recommendProductQuantity}><p>mavjud:</p> <p>{item.random_shop.quantity} dona.</p></div>
                                <div className={stl.recommendProductPrice}>
                                    <div>
                                        <p>{item.random_shop.monthly_price} сум / мес.</p>
                                        <p>{item.random_shop.price} сум</p>
                                    </div>
                                    <button><span><BucketLogo/></span>  в Корзину</button>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
                 </ul>
                <div className={stl.recommendProductsSectionAds}>
                    <div><Link href='#'>
                    <div className={stl.recommendProductsSectionAdsInfo}>
                    <p>VIVO <span>X550</span> </p><span><ArrowLogo/></span> 
                    <p>А также стремящиеся вытеснить традиционное производство, технология в целые кластеры себе подобных.</p>
                    </div>
                    </Link></div>

                    <div><Link href='#'>
                    <div className={stl.recommendProductsSectionAdsInfo}>
                    <p>HUAWEI <span>P55</span> </p><span><ArrowLogo/></span> 
                    <p>А также стремящиеся вытеснить традиционное производство, технология в целые кластеры себе подобных.</p>
                    </div>
                    </Link></div>


                </div>
            </div>
         
      </div>
     </section>
      </>
  )
}


