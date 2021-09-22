import Head from 'next/head'
import { getPostsData, getAllPostIds } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Bloks({ allPostsData }) {
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
