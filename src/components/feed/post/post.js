import { formatDate } from "../../../utils/helper.js";
import InfluencerInfo from "./influencer-info/influencer-info.js";
import Media from "./media/media.js";
import PostMetrics from "./post-metrics/post-metrics.js";
import styles from "./post.module.css";

const Post = ({ post }) => {
  return (
    <div key={post.id} className={styles.postDetails}>
      <div className={styles.postImages}>
        <Media images={post.images} />
        <InfluencerInfo post={post} />
      </div>

      <div className={styles.postDate}>
        Posted on &nbsp;
        <span className={styles.postDateFormat}>
          {formatDate(post.postingDate)}
        </span>
      </div>
      <PostMetrics metrics={post?.stats} />
    </div>
  );
};

export default Post;
