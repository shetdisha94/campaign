import { useEffect, useState } from "react";
import { CAMPAIGN_POST_API } from "../utils/constants";

const useCampaingnPosts = () => {
  const [postDetails, setPostDetails] = useState([]);

  const fetchPostDetails = async () => {
    console.log(CAMPAIGN_POST_API);
    const response = await fetch(CAMPAIGN_POST_API);
    const postDetailsList = await response.json();

    setPostDetails(postDetailsList);
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  return postDetails;
};

export default useCampaingnPosts;
