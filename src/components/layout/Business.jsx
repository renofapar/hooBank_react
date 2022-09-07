import React from "react";
import styled from "../../styles/Section.module.scss";
import { star, send, shield } from "../../assets";
const Business = () => {
  return (
    <section className={styled.sect_business}>
      <div className={styled.business_left}>
        <h2>You do the business, we`ll handle the money.</h2>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className={styled.business_btn}>Get Started</button>
      </div>
      <div className={styled.business_right}>
        <ul className={styled.business_list}>
          <li className={styled.business_list_item}>
            <div className={styled.icon_wrap}>
              <img src={shield} alt="" />
            </div>
            <div className={styled.business_item_content}>
              <h4>Rewards</h4>
              <p>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </li>
          <li className={`${styled.business_list_item} ${styled.active}`}>
            <div className={styled.icon_wrap}>
              <img src={star} alt="" />
            </div>
            <div className={styled.business_item_content}>
              <h4>100% secured</h4>
              <p>
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </li>
          <li className={styled.business_list_item}>
          <div className={styled.icon_wrap}>
              <img src={send} alt="" />
            </div>
            <div className={styled.business_item_content}>
              <h4>Balance Transfer</h4>
              <p>
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Business };
