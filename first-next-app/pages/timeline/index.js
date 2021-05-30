import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Timeline({ userName }){
  return ( 
    <div className={styles.container}>

      <h1>This is the timeline of {userName}</h1> 
      <Link href="/" >Home</Link>
      <br />
      <Link href="/detail">Detail</Link>
    </div>
  )
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
  .then(res => res.json())
  }