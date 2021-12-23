import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let queries = "?";
  for (let key in query) {
    queries += query[key] ? `${key}=${query[key]}&` : "";
  }

  const fullUrl = url + queries;

  useEffect(() => {
    setLoading(true);
    axios
      .get(fullUrl)
      .then((res) => setData(res.data))
      .catch((e) => {
        setError(e);
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return { data, loading, error };
};

export default useFetch;
