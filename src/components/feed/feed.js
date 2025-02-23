import React from "react";
import styles from "./feed.module.css";
import Post from "./post/post.js";
import useCampaingnPosts from "../../hooks/useCampaignPosts.js";

const Feed = () => {
  const campaignPosts = useCampaingnPosts();

  return (
    <div className={styles.feedContainer}>
      {campaignPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
