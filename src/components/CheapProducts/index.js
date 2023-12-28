import axios from "axios";
import sty from "./index.module.css";
import { useEffect, useState } from "react";
// import { HardIcon } from "../svg";

//https://api.brandstore.uz/api/home 200 so'm
//type: "max_price_half_million 500so'm
// type: "max_price_million 1 mln

export default function CheapProduct() {
  const [two, setData] = useState([]);
  const [five, setFive] = useState([]);
  const [oneMln, setOneMln] = useState([]);
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
        // console.log(r.data.data, "res");
        setFive(r.data.data.product_request);
      });
    axios
      .get("https://api.brandstore.uz/api/home", {
        params: {
          type: "max_price_million",
        },
      })
      .then((r) => {
        // console.log(r.data.data, "res");
        setOneMln(r.data.data.product_request);
      });
  }, []);

  return (
    <>
      <div className={sty.cheapProduct_wrapper}>
        <div className={sty.cheapProduct_all_item}>
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
              <button className={sty.cheapProduct_all_btn}>Смотреть всё</button>
            </div>
          </div>
          <div className={sty.cheapProduct_api_map_wrap}>
            <div>
              <div className={sty.cheapProduct_tab}>
                {tab == 1 && (
                  <div className={sty.cheapProduct_container}>
                    {two.length &&
                      two.slice(0, 6).map((item) => (
                        <div
                          className={sty.cheapProcuct_two_wrap}
                          key={item.id}
                        >
                          <div className={sty.cheap_img}>
                            <div className={sty.heapProduc_hard_icon}>
                              {/* <HardIcon /> */}
                            </div>
                            <img
                              className={sty.cheapProduct_img}
                              src={item.images[0].url}
                            />
                            <p className={sty.cheapProduct_item_name}>
                              {item.random_shop.name}
                            </p>
                            <p className={sty.cheapProduct_brand_name}>
                              {item.name}
                            </p>
                            <div className={sty.cheapProduct_item_price}>
                              <div>
                                <span className={sty.span}>
                                  {item.random_shop.monthly_price} so'm / oy
                                </span>
                                <p className={sty.cheapProduct_price}>
                                  {item.random_shop.price} So'm
                                </p>
                              </div>
                              <p className={sty.cheapProduct_thereIs}>
                                <p className={sty.cheapProduct_thereIs_text}>
                                  Mavjud:
                                </p>
                                {item.random_shop.bs_quant}-dona
                              </p>
                              <button>Qo'shish</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <div className={sty.cheapProduct_tab}>
                {tab == 2 && (
                  <div className={sty.cheapProduct_container}>
                    {five.length &&
                      five.slice(0, 6).map((item) => (
                        <div
                          className={sty.cheapProcuct_two_wrap}
                          key={item.id}
                        >
                          <div className={sty.cheap_img}>
                            <div className={sty.heapProduc_hard_icon}>
                              <HardIcon />
                            </div>
                            <img
                              className={sty.cheapProduct_img}
                              src={item.images[0].url}
                            />
                            <p className={sty.cheapProduct_item_name}>
                              {item.random_shop.name}
                            </p>
                            <p className={sty.cheapProduct_brand_name}>
                              {item.name}
                            </p>
                            <div className={sty.cheapProduct_item_price}>
                              <div>
                                <span className={sty.span}>
                                  {item.random_shop.monthly_price} so'm / oy
                                </span>
                                <p>{item.random_shop.price} So'm</p>
                              </div>
                              <p className={sty.cheapProduct_thereIs}>
                                <p className={sty.cheapProduct_thereIs_text}>
                                  Mavjud:
                                </p>
                                {item.random_shop.bs_quant}-dona
                              </p>

                              <button>Qo'shish</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <div className={sty.cheapProduct_tab}>
                {tab == 3 && (
                  <div className={sty.cheapProduct_container}>
                    {oneMln.length &&
                      oneMln.slice(0, 6).map((item) => (
                        <div
                          className={sty.cheapProcuct_two_wrap}
                          key={item.id}
                        >
                          <div className={sty.cheap_img}>
                            <div className={sty.heapProduc_hard_icon}>
                              <HardIcon />
                            </div>
                            <img
                              className={sty.cheapProduct_img}
                              src={item.images[0].url}
                            />

                            <p className={sty.cheapProduct_item_name}>
                              {item.random_shop.name}
                            </p>
                            <p className={sty.cheapProduct_brand_name}>
                              {item.name}
                            </p>
                            <div className={sty.cheapProduct_item_price}>
                              <div>
                                <span className={sty.span}>
                                  {item.random_shop.monthly_price} so'm / oy
                                </span>
                                <p>{item.random_shop.price} So'm</p>
                              </div>
                              <p className={sty.cheapProduct_thereIs}>
                                <p className={sty.cheapProduct_thereIs_text}>
                                  Mavjud:
                                </p>
                                {item.random_shop.bs_quant}-dona
                              </p>

                              <button>Qo'shish</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
            <div className={sty.cheapProduct_adverd}>
              <div className={sty.cheapProduct_adverd_forst}></div>
              <div className={sty.cheapProduct_adverd_secand}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
