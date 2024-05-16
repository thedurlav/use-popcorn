import { useEffect, useState } from "react";
const KEY = "ffa9ef77";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();
    const controller = new AbortController();
    async function fetchMovie() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong with fetching");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not found");
        setMovies(data.Search);
      } catch (err) {
        console.log(err.message);
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setIsLoading(false);
      return;
    }
    // handleCloseMovie();

    fetchMovie();
    return () => controller.abort();
  }, [query]);

  return { error, isLoading, movies };
}
