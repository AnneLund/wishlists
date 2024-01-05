import { useState, useCallback } from "react";
import axios from "axios";
import { api_url } from "../../Appservices/api_urls";

function useFetchWishData(member, id) {
  const [wishData, setWishData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWishData = useCallback(async () => {
    try {
      const res = await axios.get(`${api_url}/${member}/${id}`);
      setWishData(res.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching wish data:", err);
    }
  }, [member, id]);

  return { wishData, fetchWishData, error };
}

export default useFetchWishData;
