import Link from 'next/link'

export default function Timeline(){
  return ( 
    <>
      <h1>This is the timeline</h1> 
      <Link href="/" >Home</Link>
      <style jsx>{`
        h1{
          font-size:3rem;
          color:teal;
        }
      `}</style>
    </>
  )
}