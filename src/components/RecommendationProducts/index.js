import axios from "axios";
import cls from "../Brands/brands.module.css";
import stl from "./RecommendationProducts.module.css";
import { useEffect, useState } from "react";
import {
  ReccomendationProductSectionLogo,
  LikeLogo,
  ChartLogo,
  BucketLogo,
  ArrowLogo,
} from "../svg";
import Link from "next/link";

export default function RecommendationProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.brandstore.uz/api/home", {
        params: {
          type: "recommended_products",
        },
      })
      .then((r) => {
        console.log(r.data.data.product_request, "res");
        setData(r.data.data.product_request);
      });
  }, []);

  return (
    <>
      <section className={`${cls.sectionBrands} ${stl.sectionRecommend}`}>
        <div className="container">
          <div className={cls.brandAndReccomendNavPart}>
            <div className={cls.sectionName}>
              <div className={cls.yourBrandSectionLogo}>
                <ReccomendationProductSectionLogo />
              </div>

              <span>
                <p>brandstore</p>
                <p>рекомендует</p>
              </span>
            </div>
            <button>Смотреть всё</button>
          </div>

          <div className={stl.recommendationProductsWrapper}>
            <ul className={stl.recommendationProducts}>
              {data.length &&
                data.slice(0, 6).map((item) => (
                  <li key={item.id} className={stl.recommendationProductsItem}>
                    <Link href="#">
                      <div className={stl.likeLogo}>
                        <LikeLogo /> <ChartLogo />
                      </div>
                      <div className={stl.recommendationProductsImage}>
                        <img src={item.images[0].url} alt={item.name} />
                      </div>
                      <div className={stl.recommendProductInfo}>
                        <div className={stl.recommendProductTitle}>
                          <p>{item.class.name}</p>
                          <p>{item.name}</p>
                        </div>
                        <div className={stl.recommendProductQuantity}>
                          <p>Доступно:</p>
                          <p>{item.random_shop.quantity} шт.</p>
                        </div>
                        <div className={stl.recommendProductPrice}>
                          <div>
                            <p>{item.random_shop.monthly_price} сум / мес.</p>
                            <p>{item.random_shop.price} сум</p>
                          </div>
                          <button>
                            <span hidden='hidden'>
                              <BucketLogo />
                            </span>
                            в Корзину
                          </button>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
            <div className={stl.recommendProductsSectionAds}>
              <div>
                <Link href="#">
                  <div className={stl.recommendProductsSectionAdsInfo}>
                    <p>
                      VIVO <span>X550</span>
                    </p>
                    <span>
                      <ArrowLogo/>
                    </span>
                    <p>
                      А также стремящиеся вытеснить традиционное производство,
                      технология в целые кластеры себе подобных.
                    </p>
                  </div>
                </Link>
              </div>

              <div>
                <Link href="#">
                  <div className={stl.recommendProductsSectionAdsInfo}>
                    <p>
                      HUAWEI <span>P55</span>
                    </p>
                    <span>
                      <ArrowLogo />
                    </span>
                    <p>
                      А также стремящиеся вытеснить традиционное производство,
                      технология в целые кластеры себе подобных.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
