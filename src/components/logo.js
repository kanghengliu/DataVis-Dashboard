import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/logo.png"
      width={600}
      height={200}
      alt="Moovies"
    />
  )
}