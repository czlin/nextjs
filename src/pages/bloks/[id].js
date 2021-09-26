import Head from 'next/head'
import { useState, useEffect } from 'react'
import { getPostsData, getAllPostIds } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Bloks({ allPostsData, ...props }) {
  const [count, setCount] = useState(0);

  const handleAdd = (type) => {
    if ('add' === type) {
      setCount(count + 1);
    }
    else if ('reduce' === type) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    setCount(count + 2)
  }, [])

  return (<Layout>
    <Head>
      <title>{allPostsData.title}</title>
    </Head>
    {allPostsData.title}
    <br />
    {allPostsData.title}
    <br />
    {allPostsData.date}
    <br />
    <div dangerouslySetInnerHTML={{ __html: allPostsData.contentHtml }} />
    <div>
      计数：{count}
    </div>
    <button onClick={handleAdd.bind(this, 'add')}>加一</button><button onClick={handleAdd.bind(this, 'reduce')}>减一</button>
  </Layout>)
}

export async function getStaticProps({ params }) {
  const allPostsData = await getPostsData(params.id)
  return {
    props: {
      allPostsData,
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}
