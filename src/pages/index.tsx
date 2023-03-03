import Card from '@/components/Card'
import Link from 'next/link'
//fetch Hook
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import Spinner from '@/components/Spinner'
import type { NextPage } from 'next'
import React, { useState } from 'react'
import { useFetchMovies } from '../../api/fetchHooks'
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import Header from '../components/Header'

const Home: NextPage = () => {

  const [query, setQuery] = useState("")
  const { data, fetchNextPage, isLoading, isFetching, error } = useFetchMovies(query)

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      fetchNextPage()
    }
  }
  if(error) return <div> Oh no something went wrong</div>

  return (
    <main className='relative h-screen overflow-y-scroll' onScroll={handleScroll}>
      <Header setQuery={setQuery} />
      {!query && data && data.pages && !isLoading ? (<Hero title={data?.pages[0].results[0]?.title} text={data?.pages[0].results[0].overview} imgUrl={data?.pages[0].results[0]?.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + data?.pages[0].results[0]?.backdrop_path : '/no_image.jpg'} />) : null}
      {!isLoading &&<Grid className='p-4 max-w-7xl m-auto' title={query ? `Search Results:${data?.pages[0].total_results}` : "Popular movies"}>
        {
          data && data.pages[0] ? data.pages.map(page => page.results.map(movie =>
            <Link key={movie.id} href={`/${movie.id}`}>
              <div className="cursor-pointer hover:opacity-80 duration-300">{
                <Card
                  imgUrl={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : '/no_image.jpg'}
                  title={movie.original_title}
                />
              }
              </div>
            </Link>
          )) : null
        }
      </Grid>}
      {isLoading || isFetching ? <Spinner /> : null}
    </main>
  )
}

export default Home;
