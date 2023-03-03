import { Movies } from "./types"

export const basicFetch = async <returnType>(endpoint:string):Promise<returnType> =>{
  const response = await fetch(endpoint)
  if(!response.ok){
    console.log(response.text)
    throw new Error('error')
  }
  const data = await response.json()
  return data
}
// fetch function
export const fetchMovies = async (search="", page=1): Promise<Movies> =>{
  return await basicFetch<Movies> (`api/movies?search=${search}&page=${page}`)
}