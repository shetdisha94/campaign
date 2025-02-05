const InfluencerDetails = ({ post }) => {
  const { influencerName, handle, influencerImage } = post;

  console.log(influencerName, handle, influencerImage);
  return (
    <div className="influencer-details">
      <div className="influencer-photo-info">
        <img src={influencerImage} alt="" className="influencer-photo" />
      </div>
      <div className="influencer-info">
        <div className="influencer-name">{influencerName}</div>
        <div className="influencer-handle">{handle}</div>
      </div>
    </div>
  );
};
export default InfluencerDetails;
