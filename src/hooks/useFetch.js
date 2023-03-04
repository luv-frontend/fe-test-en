import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      if (page === 1) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const response = await fetch(`${url}?page=${page}`);
        const newData = await response.json();
        page === 1 ? setData(newData) : setData([...data, ...newData]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    }
    fetchData();
  }, [url, page]);

  const fetchMore = () => {
    setPage(page + 1);
  };

  return {
    data,
    isLoading,
    error,
    isLoadingMore,
    fetchMore,
  };
}
