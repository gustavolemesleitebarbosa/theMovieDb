import type { NextApiRequest, NextApiResponse } from "next";
import { basicFetch } from "../../../api/fetchFunctions";
import type { Movies } from "../../../api/types";
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from "../../../config";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Movies>) {
  const { page, search} = req.query// grab search parameters
  const endpoint = search?`${SEARCH_BASE_URL}${search}&page=${page}`: `${POPULAR_BASE_URL}&page=${page}`
  console.log('endpoint', endpoint)
  const data = await basicFetch<Movies>(endpoint)
  res.status(200).json(data)
}