import * as styles from "./shimmer-post.module.css";

const ShimmerPost = () => {
  return (
    <div className={styles.postDetails}>
      <div className={styles.postImages}></div>
      {/* <div className={styles.postDate}></div> */}
      <div className={styles.postMetrics}>
        <div className={styles.postMetricsBox}></div>
        <div className={styles.postMetricsBox}></div>
        <div className={styles.postMetricsBox}></div>
      </div>
    </div>
  );
};

export default ShimmerPost;
