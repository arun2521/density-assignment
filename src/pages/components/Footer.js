import React from "react";
import * as style from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="/logo3.png" alt="logo" />
      </div>
      <div className={style.columns}>
        <h5>Blog</h5>
        <h5>Fees</h5>
        <h5>Leaderboard</h5>
        <h5>Careers</h5>
        <h5>Contact Us</h5>
        <h5>Privacy Policy</h5>
      </div>
      <div className={style.description}>
        <h5>
          Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
          Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och
          pesask vyfisat. Viktiga poddradio har un mad och inde.{" "}
        </h5>
      </div>
      <div className={style.socialIcons}>
        <img className={style.facebook} src="/facebookLogo.png" alt="facebook"/>
        <img className={style.twitter} src="/TwitterLogo.png" alt="twitter"/>
        <img className={style.linkedin} src="/linkedinLogo.png" alt="linkedin"/>
        <img className={style.instagram} src="/instagramLogo.png" alt="instagram"/>
      </div>
    </div>
  );
}
