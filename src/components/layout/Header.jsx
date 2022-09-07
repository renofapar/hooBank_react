import React from "react";
import styled from "../../styles/Header.module.scss";
import { logo, menu } from "../../assets/index";
const menuList = ["Home", "About us", "Features", "Solutions"];
const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(true);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className={styled.navbar}>
      <a href="/" className={styled.logo}>
        <img src={logo} alt="Hoo Bank" />
      </a>
      <div className={styled.menuNav}>
        {openMenu && menuList.map((menuItem) => <a key={menuItem} href="/">{menuItem}</a>)}
        <div  className={styled.menuDrawer} onClick={handleMenuOpen}>
          <img src={menu} alt=""  />
        </div>
      </div>
    </header>
  );
};

export { Header };
