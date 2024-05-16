import { useState } from "react";

export function useLocalStorageState(initialState) {
  const [watched, setWatched] = useState(() => {
    let showWatched = JSON.parse(localStorage.getItem("watched"));
    return showWatched ? showWatched : [];
  });
}
