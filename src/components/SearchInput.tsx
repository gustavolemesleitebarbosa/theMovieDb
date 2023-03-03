import Image from 'next/image';
import React from "react";

type Props = {
   setQuery:  React.Dispatch<React.SetStateAction<string>>
}

const TIME= 300

const SearchInput =({setQuery}:Props)=>{
  const [text, setText] = React.useState('')
  const timer = React.useRef<NodeJS.Timeout>()

  const  handleInput =(e: React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.currentTarget.value
    clearTimeout(timer.current)
    setText(value)
    timer.current = setTimeout(()=> {
      setQuery(value)
    },TIME)
  }

   return(
    <>
      <input className ="h-10 px-5 pr-14 md:w-96 rounded-full text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200" type="text" placeholder="Search Movie" value={text} onChange={handleInput} />
      <div className="absolute right-4 top-9 ">
        <Image width="30" height="32" src="/tmdb-logo.svg" alt="tmdb-logo"/>
      </div>
    </>
   )
}

export default SearchInput