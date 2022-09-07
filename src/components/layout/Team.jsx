import React from "react";
import styled from "../../styles/section/Team.module.scss";
import { people01, people02, people03, quotes  } from "../../assets";
const {
  sect_team,
  about_top,
  par_wrap,
  head_wrap,
  team_list,
  team_item,
  info,
  avatar_info,
  active,
  par_first
} = styled;
const Team = () => {
  return (
    <section className={sect_team}>
      
      <div className={about_top}>
        <div className={head_wrap}>
          <h4>What people are saying about us</h4>
        </div>
        <div className={par_wrap}>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <ul className={team_list}>

        <li className={`${team_item} ${active}`}>
          <img src={quotes} alt="" />
          <p className={par_first}>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className={avatar_info}>
            <img src={people01} alt="" />
            <div className={info}>
              <h5>Herman Jensen</h5>
              <p>Founder & Leader</p>
            </div>
          </div>
        </li>

        <li className={team_item}>
          <img src={quotes} alt="" />
          <p className={par_first}>
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className={avatar_info}>
            <img src={people02} alt="" />
            <div className={info}>
              <h5>Steve Mark</h5>
              <p>Founder & Leader</p>
            </div>
          </div>
        </li>

        <li className={team_item}>
          <img src={quotes} alt="" />
          <p className={par_first}>
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </p>
          <div className={avatar_info}>
            <img src={people03} alt="" />
            <div className={info}>
              <h5>Kenn Gallagher</h5>
              <p>Founder & Leader</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export { Team };
