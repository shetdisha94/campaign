import React from "react";
import * as styles from "./influencer-info.module.css";

const InfluencerInfo = ({ post }) => {
  const { influencerName, handle, influencerImage } = post;

  console.log(influencerName, handle, influencerImage);
  return (
    <div className={styles.influencerDetails}>
      <div>
        <img src={influencerImage} alt="" className={styles.influencerPhoto} />
      </div>
      <div className={styles.influencerInfo}>
        <div className={styles.influencerName}>{influencerName}</div>
        <div className={styles.influencerHandle}>{handle}</div>
      </div>
    </div>
  );
};

export default InfluencerInfo;
