import React from "react";
import styled from "../../styles/section/Invoicing.module.scss";
import { bill, google, apple } from "../../assets";
const { invoicing, content_left, content_right, img_wrap, store_wrap } = styled;

const Invoicing = () => {
  return (
    <section className={invoicing}>
      <div className={content_left}>
        <div className={img_wrap}>
          <img src={bill} alt="" />
        </div>
      </div>
      <div className={content_right}>
        <h2>Easily control your billing & invoicing.</h2>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={store_wrap}>
          <img src={apple} alt="app store icon" />
          <img src={google} alt="google play icon" />
        </div>
      </div>
    </section>
  );
};

export { Invoicing };
