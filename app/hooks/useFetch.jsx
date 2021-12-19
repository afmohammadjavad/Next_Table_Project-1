import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((e) => {
        setError(e);
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {data, loading, error};
};

export default useFetch;
