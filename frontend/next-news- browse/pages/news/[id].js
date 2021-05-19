import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import dateFormat from "../../utils/dateFormat";

export default function Post({ newData }) {
  return (
    <Layout>
      <Head>
        <title>{newData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{newData.title}</h1>
        <div className={utilStyles.lightText}>
          <span style={{ marginRight: 20 }}>{newData.src}</span>
          <span>{dateFormat(newData.releaseTime)}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: newData.content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const res = await fetch("http://localhost:5000/api/ids");
  const data = await res.json();
  const paths = data.data;
  const nextPaths = paths.map((item) => {
    return {
      params: {
        id: item,
      },
    };
  });
  return {
    paths: nextPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const res = await fetch(`http://localhost:5000/api/news/${params.id}`);
  const data = await res.json();
  const newData = data.data;
  return {
    props: {
      newData,
    },
  };
}
