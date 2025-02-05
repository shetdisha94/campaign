import { useState } from "react";
const PostMetrics = ({ metrics }) => {
  const [isGreyedOut, setIsGreyedout] = useState(false);

  const formatNumber = (value) => {
    return value ? Intl.NumberFormat().format(value) : "-";
  };

  const formatPercentage = (value) => {
    return value ? `${value} %` : "-";
  };
  return (
    <>
      <div className="post-metrics-box">
        <div className="post-metrics-value">
          {formatNumber(metrics?.impressions)}
        </div>
        <div className="post-metrics-label">IMPRESSIONS</div>
      </div>
      <div className="post-metrics-box">
        <div className="post-metrics-value">{formatNumber(metrics?.reach)}</div>
        <div className="post-metrics-label">REACH</div>
      </div>
      <div className="post-metrics-box">
        <div className="post-metrics-value">
          {formatPercentage(metrics?.engagement)}
        </div>
        <div className="post-metrics-label">ENGAGEMENT</div>
      </div>
    </>
  );
};

export default PostMetrics;
