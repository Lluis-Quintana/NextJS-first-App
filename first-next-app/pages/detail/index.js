import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Detail({ userName, data }){
  return ( 
    <div className={styles.container}>
      <h1>{userName}'s detail page</h1> 
      <p>{data}</p>
      <Link href="/" >
          Home
      </Link>
      <br />
      <Link href="/timeline" >
          Timeline
      </Link>
    </div>
  )
}

Detail.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
  .then(res => res.json())
  }