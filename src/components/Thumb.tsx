import Image from 'next/legacy/image';


type Props = {
  imgUrl: string
}

const Thumb = ({ imgUrl }: Props) => (
  <Image
    placeholder="blur"
    blurDataURL='/spinner.svg'
    className="rounded-lg"
    layout='fill'
    style={{ objectFit: 'cover' }}
    src={imgUrl}
    alt="thumb"
  />
)

export default Thumb