import React from 'react'
import { facebook, instagram, linkedin, logo, twitter } from '../../assets'
import styled from '../../styles/section/Footer.module.scss'
const {list} = styled
const Footer = () => {
  return (
    <footer className={styled.footer}>
      <div className={styled.container}>

        <div className={styled.logo_wrap}>
          <a href={styled.logo}><img src={logo} alt="Logo" /></a>
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className={styled.menu}>
        <div className={list}>
          <h6>Usefull Links</h6>
          <ul>
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>

        <div className={list}>
          <h6>Community</h6>
          <ul>
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>

        <div className={list}>
        <h6>Partners</h6>
          <ul>
            <li>Out Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
        </div>
        

      </div>

      <div className={styled.copyright}>
        <div className={styled.paragraph}>
          <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className={styled.networks}>
          <a href="/"><img src={instagram} alt="instagram" /></a>
          <a href="/"><img src={facebook} alt="facebook" /></a>
          <a href="/"><img src={twitter} alt="twitter" /></a>
          <a href="/"><img src={linkedin} alt="linkedin" /></a>
        </div>
      </div>

    </footer>
  )
}

export {Footer}