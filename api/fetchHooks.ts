import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchMovies } from "./fetchFunctions";

import { Movies } from "./types";

//fetch hook
export const useFetchMovies = (search: string) => {
  // first key, then fetch function, finally the options (the object that is the last parameter)
  // pageParam is provided by react-query
  return useInfiniteQuery(['movies', search], ({ pageParam = 1 }) => fetchMovies(search  , pageParam), {
    getNextPageParam: (lastPage: Movies) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1
      }
      else return undefined
    },
    refetchOnWindowFocus: false
  })
}