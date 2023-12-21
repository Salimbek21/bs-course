import axios from "axios";
import sty from "./index.module.css";
import { useEffect, useState } from "react";

//https://api.brandstore.uz/api/banners

export default function AboutFor() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("https://api.brandstore.uz/api/posts?per_page=50").then((r) => {
      console.log(r, "Asqar2");
      // setOneMln(r.data.data.product_request);
    });
  }, []);
  return (
    <>
      <div className={sty.AboutFor_}>
        <div>
          <div className={sty.aboutFor_img}>
            <img className={sty.aboutFor_forst_box} src={`Computer.png`}></img>
            <img className={sty.aboutFor_secand_box} src={`redImg.png`}></img>
          </div>
        </div>
      </div>
    </>
  );
}
