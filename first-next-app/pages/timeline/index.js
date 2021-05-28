import Link from 'next/link'

export default function Timeline({ userName }){
  return ( 
    <>
      <h1>This is the timeline of {userName}</h1> 
      <Link href="/" >
          Home
      </Link>
      <style jsx>{`
        h1{
          font-size:3rem;
          color:teal;
        }
      `}</style>
    </>
  )
}

Timeline.getInitialProps = async () =>{
  return {userName: 'Lluís'}
}