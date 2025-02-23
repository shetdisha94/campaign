import React from "react";
import styles from "./post-metrics.module.css";

const PostMetrics = ({ metrics }) => {
  const formatNumber = (value) => {
    return value ? Intl.NumberFormat().format(value) : "-";
  };

  const formatPercentage = (value) => {
    return value ? `${value} %` : "-";
  };

  return (
    <div className={styles.postMetrics}>
      <div className={styles.postMetricsBox}>
        <div className={styles.postMetricsValue}>
          {formatNumber(metrics?.impressions)}
        </div>
        <div className={styles.postMetricsLabel}>IMPRESSIONS</div>
      </div>
      <div className={styles.postMetricsBox}>
        <div className={styles.postMetricsValue}>
          {formatNumber(metrics?.reach)}
        </div>
        <div className={styles.postMetricsLabel}>REACH</div>
      </div>
      <div className={styles.postMetricsBox}>
        <div className={styles.postMetricsValue}>
          {formatPercentage(metrics?.engagement)}
        </div>
        <div className={styles.postMetricsLabel}>ENGAGEMENT</div>
      </div>
    </div>
  );
};

export default PostMetrics;
