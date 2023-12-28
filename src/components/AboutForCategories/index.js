import axios from "axios";
import sty from "./index.module.css";
import { useEffect, useState } from "react";

//https://api.brandstore.uz/api/banners

export default function AboutFor() {
  return (
    <>
      <div className={sty.AboutFor}>
        <div className={sty.aboutFor_container}>
          <div className={sty.aboutFor_img}>
            <img
              className={sty.aboutFor_forst_box_img}
              src={`Computer.png`}
            ></img>
            <p className={sty.AboutFor_text1}>Для настоящих геймеров</p>
            <img className={sty.aboutFor_secand_box0} src={`redImg.png`}></img>
          </div>
          <div className={sty.aboutFor_center_img}>
            <img
              className={sty.aboutFor_forst_center_box_img}
              src={`Computer.png`}
            ></img>
            <p className={sty.AboutFor_text2}>Техника для вашего дома</p>
            <img className={sty.aboutFor_secand_box1} src={`redImg.png`}></img>
          </div>
          <div className={sty.aboutFor_left_img}>
            <img
              className={sty.aboutFor_forst_left_box_img}
              src={`Computer.png`}
            ></img>
            <p className={sty.AboutFor_text3}>Для дома и офиса</p>

            <img className={sty.aboutFor_secand_box2} src={`redImg.png`}></img>
          </div>
          <img className={sty.tecno_img} src={`tecno.png`} />
        </div>
      </div>
    </>
  );
}
