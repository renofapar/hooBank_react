import React from "react";
import styled from "../../styles/section/CardDeal.module.scss";
import btn from '../../styles/Global.module.scss';
import { card } from "../../assets";

const { card_deal, bg_wrap, content_right, content_left } = styled;
const {btn_gradient} = btn;

const CardDeal = () => {
  
  return (
    <section className={card_deal}>
      <div className={content_left}>
        <h2>Find a better card deal in few easy steps.</h2>
        <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <button className={btn_gradient}>
          Get Started
        </button>
      </div>
      <div className={content_right}>
        <div className={bg_wrap}>
        <img src={card} alt="" />
        </div>
      </div>
    </section>
  );
};

export { CardDeal };
