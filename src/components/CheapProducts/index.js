import axios from "axios";
import cls from "../Brands/brands.module.css";
import stl from "../RecommendationProducts/RecommendationProducts.module.css";
import style from "./cheapProducts.module.css";
import { useEffect, useState } from "react";
import { LikeLogo, ChartLogo, BucketLogo, ArrowLogo, Percentage } from "../svg";
import Link from "next/link";

export default function RecommendationProducts() {
  const [firstData, setFirstData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [thirdData, setThirdData] = useState([]);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    axios
      .get("https://api.brandstore.uz/api/home", {
        params: {
          type: "max_price_two_hundred_thousands",
        },
      })
      .then((r) => {
        console.log(r.data.data, "Backand");
        setFirstData(r.data.data.product_request);
      });
    axios
      .get("https://api.brandstore.uz/api/home", {
        params: {
          type: "max_price_half_million",
        },
      })
      .then((r) => {
        // console.log(r.data.data, "res");
        setSecondData(r.data.data.product_request);
      });
    axios
      .get("https://api.brandstore.uz/api/home", {
        params: {
          type: "max_price_million",
        },
      })
      .then((r) => {
        // console.log(r.data.data, "res");
        setThirdData(r.data.data.product_request);
      });
  }, []);

  return (
    <>
      <section className={`${cls.sectionBrands} ${stl.sectionRecommend}`}>
        <div className="container">
          <div
            className={`${cls.brandAndReccomendNavPart} ${style.cheapProductsNavbar}`}
          >
            <div className={cls.sectionName}>
              <div
                className={`${cls.yourBrandSectionLogo} ${style.percentageLogo}`}
              >
                <Percentage />
              </div>

              <span>
                <p>Товары</p>
                <p>дешевле</p>
              </span>
            </div>

            {/* !!!!<<<<<<<<<<<<     Price   >>>>>>>>>>>> */}

            <ul className={style.price}>
              <li>
                <button
                  id={style.cheapProduct_tab}
                  onClick={() => setTab(1)}
                  className={tab == 1 && `${style.buttonActive}`}
                >
                  200 000 сум
                </button>
              </li>

              <li>
                <button
                  id={style.cheapProduct_tab}
                  onClick={() => setTab(2)}
                  className={tab == 2 && `${style.buttonActive}`}
                >
                  500 000 сум
                </button>
              </li>

              <li>
                <button
                  id={style.cheapProduct_tab}
                  onClick={() => setTab(3)}
                  className={tab == 3 && `${style.buttonActive}`}
                >
                  1 000 000 сум
                </button>
              </li>
            </ul>

            <button>Смотреть всё</button>
          </div>

          <div className={stl.recommendationProductsWrapper}>
            {/* <<<<<<<<<<<<<<Cost 200 000>>>>>>>>>>>>>>>> */}

            {tab == 1 && (
              <ul
                className={`${stl.recommendationProducts} ${style.cheapProducts}`}
              >
                {firstData.length &&
                  firstData.slice(0, 6).map((item) => (
                    <li
                      key={item.id}
                      className={stl.recommendationProductsItem}
                    >
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
                            <p className={style.cheapProductsName}>
                              {item.name}
                            </p>
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
                              <span hidden="hidden">
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
            )}

            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Cost 500 000 >>>>>>>>>>> */}

            {tab == 2 && (
              <ul
                className={`${stl.recommendationProducts} ${style.cheapProducts}`}
              >
                {secondData.length &&
                  secondData.slice(0, 6).map((item) => (
                    <li
                      key={item.id}
                      className={stl.recommendationProductsItem}
                    >
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
                            <p className={style.cheapProductsName}>
                              {item.name}
                            </p>
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
                              <span hidden="hidden">
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
            )}

            {/* <<<<<<<<<<<<<<<<<<<Cost 1 000 000>>>>>>>>>>>>>>>>> */}

            {tab == 3 && (
              <ul
                className={`${stl.recommendationProducts} ${style.cheapProducts}`}
              >
                {thirdData.length &&
                  thirdData.slice(0, 6).map((item) => (
                    <li
                      key={item.id}
                      className={stl.recommendationProductsItem}
                    >
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
                            <p className={style.cheapProductsName}>
                              {item.name}
                            </p>
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
                              <span hidden="hidden">
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
            )}

            <div className={stl.recommendProductsSectionAds}>
              <div>
                <Link href="#">
                  <div className={stl.recommendProductsSectionAdsInfo}>
                    <p>
                      VIVO <span>X550</span>
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
