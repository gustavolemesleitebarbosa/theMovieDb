

import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './SearchInput';


type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setQuery }: Props) => (
  <div className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
    <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
      <Link href='/'>
        <div className='flex items-center jus cursor-pointer  h-full '>
          <div className='invisible md:visible'>
            <Image width='150' height='50' src='/rmdb-logo.svg' alt='rmdb-logo' />
          </div>
          <div className='absolute md:invisible pt-2'>
            <Image height='42' width='42' src='/rmdb-logo-small.svg' alt='rmdb-logo-small' />
          </div>
        </div>
      </Link>
      {setQuery ? (<div className='relative flex items-center'><SearchInput setQuery={setQuery}/></div>) : null}
    </div>
  </div>
);

export default Header;