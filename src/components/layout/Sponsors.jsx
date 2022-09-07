import React from 'react'
import styled from '../../styles/section/Sponsors.module.scss'
import btn from '../../styles/Global.module.scss'
import { airbnb, binance, coinbase, dropbox} from '../../assets'
const Sponsors = () => {
  return (
    <section className={styled.sponsors}>
      <ul className={styled.list}>
        <li><img src={airbnb} alt="" /></li>
        <li><img src={binance} alt="" /></li>
        <li><img src={coinbase} alt="" /></li>
        <li><img src={dropbox} alt="" /></li>
      </ul>
      <div className={styled.service}>
        <div className={styled.content}>
          <h3>Let’s try our service now!</h3>
          <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className={styled.btn_wrap}>
        <a href="/" className={btn.btn_gradient}>Get Started</a>
        </div>
        
      </div>
    </section>
  )
}

export {Sponsors}