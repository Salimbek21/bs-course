import { Aurharization, CartIcon, HardIcon, Stick, Sticks } from "./../../svg";

import sty from "./index.module.css";

export default function Header() {
  return (
    <>
      <div className={sty.Header_container}>
        <div className={sty.header_wrap}>
          <img src={"logo.png"} />
          <button className={sty.header_catigories_btn}>
            <Stick />
            <p>Категории</p>
          </button>
          <div className={sty.header_search_wrap}>
            <select
              className={sty.header_search_catigories_select}
              name=""
              id=""
            >
              <option
                className={sty.header_search_catigories_select_option}
                value="en"
              >
                Звезда
              </option>
            </select>
            <input
              className={sty.header_search_input}
              type="text"
              placeholder="Поиск по товарам"
            />
            <ul className={sty.searchIcon_box}>
              <img src={"search icon.png"} />
            </ul>
          </div>
          <ul className={sty.header_aurharization_list}>
            <Aurharization />
            <li>Авторизация</li>
          </ul>
          <ul className={sty.header_hardIcon_list}>
            <HardIcon />
            <li>Избранное</li>
          </ul>
          <ul className={sty.header_sticks_list}>
            <Sticks />
            <li>Сравнение</li>
          </ul>
          <ul className={sty.header_cartIcon_list}>
            <CartIcon />
            <li>Корзина</li>
          </ul>
        </div>
      </div>
      <div className={sty.header_productNames_container}>
        <div className={sty.header_productNames_wrap}>
          <ul className={sty.header_productNames_list}>
            <li>Подарочные карты</li>
            <li>Телефоны и планшеты</li>
            <li>Моноблоки</li>
            <li>Комплектующие</li>
            <li>Ноутбуки</li>
            <li>Для геймеров</li>
            <li>Компьютеры</li>
            <li>Оргтехника</li>
            <li>Аксессуары</li>
          </ul>
        </div>
      </div>
    </>
  );
}
