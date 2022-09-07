import React from 'react'
import styled from '../../styles/section/Hero.module.scss'
import btn from '../../styles/Global.module.scss'
import { robot, discount } from '../../assets'

const Hero = () => {
  return (
    <div className={styled.row}>
      <div className={styled.left_content}>
        <div className={styled.discount_block}>
        <img src={discount} alt="discount" /><p><span>20%</span> discount for <span>1 month</span> account</p>
        </div>
        <div className={styled.header_text}>
          <h1>The Next<br/> <span>Generation</span><br/> Payment Method.</h1>
        </div>
        <div className={btn.btn_started}>
          <p>Get<br/> Started</p>
        </div>
      </div>
      <div className={styled.right_content}>
        <img src={robot} alt="hero robot" />
      </div>
    </div>
  )
}

export {Hero}