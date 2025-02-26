import { useEffect, useState } from "react";
import { CAMPAIGN_POST_API } from "../utils/constants";

const useCampaingnPosts = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPostDetails = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(CAMPAIGN_POST_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setPostDetails(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  return { postDetails, error, isLoading };
};

export default useCampaingnPosts;
