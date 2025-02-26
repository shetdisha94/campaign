import React from "react";
import * as styles from "./feed.module.css";
import Post from "./post/post.js";
import useCampaingnPosts from "../../hooks/useCampaignPosts.js";
import ShimmerPost from "../ui/shimmer-post/shimmer-post.js";
import ThemeSelector from "../ui/theme/theme-selector.js";
import ThemeProvider from "../../contexts/theme-context.js";

const Feed = () => {
  const { postDetails, error, isLoading } = useCampaingnPosts();

  if (isLoading) {
    return (
      <div className={styles.feedContainer}>
        {Array.from({ length: 10 }).map((_, index) => (
          <ShimmerPost key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <ThemeProvider>
        <div className={styles.headerContainer}>
          <div>
            <img src="/campaign-logo.svg" />
          </div>

          <ThemeSelector />
        </div>
      </ThemeProvider>

      <div className={styles.feedContainer}>
        {isLoading && <ShimmerPost></ShimmerPost>}

        {postDetails.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
