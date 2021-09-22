import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Bloks({ allPostsData }) {
  return (<Layout><ul>
    {allPostsData.map((item) => {
      return <li>
        <Link href="/bloks/[id]" as={`/bloks/${item.id}`}>{item.title}</Link>
        <br />
        {item.title}
        <br />
        {item.date}
      </li>
    })}
  </ul></Layout>)
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}
