import sty from "./index.module.css";

export default function Footer() {
  return (
    <>
      <div className={sty.footer_container}>
        <div className={sty.footer_wrap}>
          <div className={sty.brandStory_address_info}>
            <ul className={sty.footer_about_info}>
              <li className={sty.footer_img}>
                <img src={"brandstoreLogo.svg"} />
              </li>
              <li>+998 71 205 93 93</li>
              <li>График работы колл-центра: Пн – Пт, с 09:00 до 18:00</li>
              <li>info@brandstore.uz</li>
              <li>г. Ташкент, Яккасарайский район, ул. Кухинур 1/1</li>
              <li className={sty.footer_icon}></li>
            </ul>
          </div>
          <div className={sty.footer_catigoriy_info}>
            <ul>
              <li>Категории</li>
              <li>Моноблоки</li>
              <li>Компьютеры</li>
              <li>Видеокарты</li>
              <li>Мониторы</li>
              <li>МФУ</li>
              <li>Wi-Fi адаптеры</li>
            </ul>
          </div>
          <div className={sty.footer_internetShop_info}>
            <ul>
              <li>Интернет магазин</li>
              <li>Новости</li>
              <li>Политика конфиденциальности</li>
              <li>О нашей компании</li>
              <li>Правила программы лояльности</li>
              <li>Правила пользования сайтом</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className={sty.footer_client_info}>
            <ul>
              <li>Покупателям</li>
              <li>Покупка в рассрочку</li>
              <li>Доставка и оплата</li>
              <li>Правила покупок с кэшбека</li>
              <li>Возврат / обмен</li>
              <li>Правила пользования купонами</li>
            </ul>
          </div>

          <div>
            <img src={"appStore.svg"} />
            <img src={"googlePlay.svg"} />
          </div>
        </div>
      </div>
    </>
  );
}
