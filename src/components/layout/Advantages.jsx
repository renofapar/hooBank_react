import React from 'react'

import styled from '../../styles/Section.module.scss';

const Advantages = () => {
  
  return (
    <section className={styled.section_wrap}>
      <ul className={styled.advantages_list}>
        <li><p>3800+ <span className={styled.span_gradient}>user active</span></p></li>
        <li><p>230+ <span className={styled.span_gradient}>trusted by company</span></p></li>
        <li><p>230M+ <span className={styled.span_gradient}>transaction</span></p></li>
      </ul>
    </section>
  )
}

export {Advantages} 