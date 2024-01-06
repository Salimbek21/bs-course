import axios from "axios";
import sty from "./index.module.css";
import { useEffect, useState } from "react";
import { HardIcon, Sticks } from "../svg";
import Link from "next/link";

//https://api.brandstore.uz/api/home 200 so'm
//type: "max_price_half_million 500so'm
// type: "max_price_million 1 mln

export default function CheapProduct() {
  const [dataTwo, setData] = useState([]);
  const [dataFive, setFive] = useState([]);
  const [dataOneMln, setOneMln] = useState([]);
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
        setData(r.data.data.product_request);
      });
    axios
      .get("https://api.brandstore.uz/api/home", {
        params: {
          type: "max_price_half_million",
        },
      })
      .then((r) => {
        console.log(r.data.data, "five");
        setFive(r.data.data.product_request);
      });
    axios
      .get("https://api.brandstore.uz/api/home", {
        params: {
          type: "max_price_million",
        },
      })
      .then((r) => {
        console.log(r.data.data, "one");
        setOneMln(r.data.data.product_request);
      });
  }, []);

  return (
    <>
      <div className={sty.cheapProduct_container}>
        <div className={sty.cheapProduct_tab_wrap}>
          <div className={sty.cheapProduct_title}>
            <div className={sty.cheapProcuct_round_prt}>
              <p>%</p>
            </div>
            <div className={sty.cheapProduct_title_item}>
              <span>Товары</span>
              <p>дешевле</p>
            </div>
            <div className={sty.cheapProduct_price_lvl}>
              <button
                id={sty.cheapProduct_tab}
                onClick={() => setTab(1)}
                className={tab == 1 && `actice`}
              >
                200 000 сум
              </button>
              <button
                id={sty.cheapProduct_tab}
                onClick={() => setTab(2)}
                className={tab == 2 && `actice`}
              >
                500 000 сум
              </button>
              <button
                id={sty.cheapProduct_tab}
                onClick={() => setTab(3)}
                className={tab == 3 && `actice`}
              >
                1 000 000 сум
              </button>
              <button className={sty.cheapProduct_all_btn}>
                <p>Смотреть всё</p>
              </button>
            </div>
          </div>
        </div>
        <div className={sty.cheapProduct_aip_container}>
          <div className={sty.cheapProduct_all}>
            {tab == 1 && (
              <div className={sty.cheapProduct_two_wrap}>
                {dataTwo.length &&
                  dataTwo.slice(0, 6).map((item) => (
                    <div
                      className={sty.cheapProduct_two_container}
                      key={item.id}
                    >
                      <div className={sty.hardIcon_cheapProduct}>
                        <div className={sty.cheapPraduct_hardIcon_icon}>
                          <HardIcon />
                        </div>
                        <Sticks />
                      </div>
                      <div className={sty.cheapPraduct_items}>
                        <img
                          className={sty.cheapProduct_brand_img}
                          src={item.images[0].url}
                        />

                        <div className={sty.cheapProduct_wrap_brand_list}>
                          <Link className={sty.cheapProduct_link} href={"#"}>
                            <p className={sty.cheapProduct_brand_text_item}>
                              {item.random_shop.name}
                            </p>
                            <p className={sty.cheapProduct_brand_text}>
                              {item.name}
                            </p>
                          </Link>
                        </div>
                      </div>
                      <p className={sty.thereIs_cheapProduct}>
                        <span>Mavjud:</span>
                        {item.random_shop.bs_quant}-dona.
                      </p>
                      <div className={sty.cheapProduct_price_wrap}>
                        <div>
                          <p className={sty.cheapProduct_monthly_price}>
                            {item.random_shop.monthly_price} So'm / oy
                          </p>
                          <Link className={sty.cheapProduct_link} href={"#"}>
                            <p className={sty.cheapProduct_brand_prace}>
                              {item.random_shop.price} So'm
                            </p>
                          </Link>
                        </div>
                        <button className={sty.cheapProduct_add_bnt}>
                          <p>Qo'shish</p>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            {tab == 2 && (
              <div className={sty.cheapProduct_two_wrap}>
                {dataFive.length &&
                  dataFive?.slice(0, 6)?.map((item) => (
                    <div
                      className={sty.cheapProduct_two_container}
                      key={item.id}
                    >
                      <div className={sty.hardIcon_cheapProduct}>
                        <div className={sty.cheapPraduct_hardIcon_icon}>
                          <HardIcon />
                        </div>
                        <Sticks />
                      </div>
                      <div className={sty.cheapPraduct_items}>
                        <img
                          className={sty.cheapProduct_brand_img}
                          src={item?.images[0]?.url}
                        />
                        <div className={sty.cheapProduct_wrap_brand_list}>
                          <Link className={sty.cheapProduct_link} href={"#"}>
                            <p className={sty.cheapProduct_brand_text_item}>
                              {item.random_shop.name}
                            </p>
                            <p className={sty.cheapProduct_brand_text}>
                              {item.name}
                            </p>
                          </Link>
                        </div>
                      </div>
                      <p className={sty.thereIs_cheapProduct}>
                        <span>Mavjud:</span>
                        {item.random_shop.bs_quant}-dona.
                      </p>
                      <div className={sty.cheapProduct_price_wrap}>
                        <div>
                          <p className={sty.cheapProduct_monthly_price}>
                            {item.random_shop.monthly_price} So'm / oy
                          </p>
                          <Link className={sty.cheapProduct_link} href={"#"}>
                            <p className={sty.cheapProduct_brand_prace}>
                              {item.random_shop.price} So'm
                            </p>
                          </Link>
                        </div>
                        <button className={sty.cheapProduct_add_bnt}>
                          Qo'shish
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}{" "}
            {tab == 3 && (
              <div className={sty.cheapProduct_two_wrap}>
                {dataOneMln.length &&
                  dataOneMln?.slice(0, 6)?.map((item) => (
                    <div
                      className={sty.cheapProduct_two_container}
                      key={item.id}
                    >
                      <div className={sty.hardIcon_cheapProduct}>
                        <div className={sty.cheapPraduct_hardIcon_icon}>
                          <HardIcon />
                        </div>
                        <Sticks />
                      </div>
                      <div className={sty.cheapPraduct_items}>
                        <img
                          className={sty.cheapProduct_brand_img}
                          src={item.images[0].url}
                        />
                        <div className={sty.cheapProduct_wrap_brand_list}>
                          <Link className={sty.cheapProduct_link} href={"#"}>
                            <p className={sty.cheapProduct_brand_text_item}>
                              {item.random_shop.name}
                            </p>
                            <p className={sty.cheapProduct_brand_text}>
                              {item.name}
                            </p>
                          </Link>
                        </div>
                      </div>
                      <p className={sty.thereIs_cheapProduct}>
                        <span>Mavjud:</span>
                        {item.random_shop.bs_quant}-dona.
                      </p>
                      <div className={sty.cheapProduct_price_wrap}>
                        <div>
                          <p className={sty.cheapProduct_monthly_price}>
                            {item.random_shop.monthly_price} So'm / oy
                          </p>
                          <Link className={sty.cheapProduct_link} href={"#"}>
                            <p className={sty.cheapProduct_brand_prace}>
                              {item.random_shop.price} So'm
                            </p>
                          </Link>
                        </div>
                        <button className={sty.cheapProduct_add_bnt}>
                          Qo'shish
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
            <div className={sty.cheapProduct_adver}>
              <div className={sty.box1}></div>
              <div className={sty.box2}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
