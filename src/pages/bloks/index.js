import Link from 'next/link'
import { useEffect } from 'react'
import http from '../../util/http'
import { getSortedPostsData } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Bloks({ allPostsData, academies }) {
  return (<Layout>
    <ul>
      {allPostsData.map((item) => {
        return <li key={item.title}>
          <Link href="/bloks/[id]" as={`/bloks/${item.id}`}>{item.title}</Link>
          <br />
          {item.title}
          <br />
          {item.date}
        </li>
      })}
    </ul>
    <ul>
      {academies[1].map((item) => {
        return (<li key={item.id}>{item.name}</li>)
      })}
    </ul>
  </Layout>)
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const data = await http.get('portal/home_other')
    .then((res) => {
      return res.data.data;
    });

  return {
    props: {
      allPostsData,
      ...data,
    }
  }
}
