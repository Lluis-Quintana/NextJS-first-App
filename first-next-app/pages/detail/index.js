import Link from 'next/link'

export default function Detail({ userName, data }){
  return ( 
    <>
      <h1>{userName}'s detail page</h1> 
      <p>{data}</p>
      <Link href="/" >
          Home
      </Link>
      <br />
      <Link href="/timeline" >
          Timeline
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

Detail.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
  .then(res => res.json())
  }