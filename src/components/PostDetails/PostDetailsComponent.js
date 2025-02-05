import { useEffect, useState } from "react";
import { CAMPAIGN_POST_API } from "../../utils/constants";
import "./PostDetailsComponent.css";
import Carousel from "./Carousel";
import InfluencerDetails from "./InfluencerDetails";
import useCampaingnPosts from "../../hooks/useCampaignPosts";
import PostMetrics from "./PostMetrics";
import { formatDate } from "../../utils/helper.js";

const PostDetails = () => {
  const campaingnPosts = useCampaingnPosts();

  return (
    <>
      {campaingnPosts.map((post) => (
        <div key={post.id} className="post-details">
          <div className="post-images">
            <Carousel post={post} />
            <InfluencerDetails post={post} />
          </div>

          <div className="post-date">
            Posted on &nbsp;
            <span className="post-date-format">
              {formatDate(post.postingDate)}
            </span>
          </div>
          <div className="post-metrics">
            <PostMetrics metrics={post?.stats} />
          </div>
        </div>
      ))}
    </>
  );
};
export default PostDetails;
