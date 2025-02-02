import { useEffect, useState } from "react";
import { CAMPAIGN_POST_API } from "../../utils/constants";
import "./PostDetailsComponent.css";

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState([]);
  const { images, postingDate } = postDetails;

  const fetchPostDetails = async () => {
    console.log(CAMPAIGN_POST_API);
    const response = await fetch(CAMPAIGN_POST_API);
    const postDetailsList = await response.json();

    setPostDetails(postDetailsList);
  };

  useEffect(() => {
    fetchPostDetails();
    console.log(postDetails);
  }, []);

  return (
    <>
      {postDetails.map((post) => (
        <div className="post-details">
          <div className="post-images">
            {post.images.length ? (
              <img src={post.images[0]} alt="image" className="" />
            ) : (
              "image"
            )}
          </div>
          <div className="post-date">Posted on {post.postingDate}</div>
          <div className="post-metrics">
            <div className="post-metrics-box">
              <div>{post.stats.impressions}</div>
              <div>IMPRESSIONS</div>
            </div>
            <div className="post-metrics-box">
              <div>{post.stats.reach}</div>
              <div>REACH</div>
            </div>
            <div className="post-metrics-box">
              <div>{post.stats.engagement} %</div>
              <div>ENGAGEMENT</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default PostDetails;
