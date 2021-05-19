import React, { useEffect, useState } from "react";
import Head from "next/head";
// import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { List, Avatar, Space, Typography, Tooltip, Layout, Input } from "antd";
import {
  ShareAltOutlined,
  EyeOutlined,
  ChromeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { GetServerSideProps, GetStaticProps } from "next";
import { New } from "../common/types";
import dateFormat from "../utils/dateFormat";
import { NewsList } from "../components/NewsList";
import { TopNews } from "../components/TopNews";

const IconText = ({
  icon,
  text,
  title,
}: {
  text: string;
  icon: any;
  title: string;
}) => (
  <Tooltip title={title}>
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  </Tooltip>
);

const { Header, Sider, Footer, Content } = Layout;

/**
 * 首页
 */
export default function Home({ allNewsData }: { allNewsData: New[] }) {
  // const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<New[]>(allNewsData);

  const loadData = async (query: string = "") => {
    const res = await fetch(`http://localhost:5000/api/news?query=${query}`);
    const data = await res.json();
    setData(data.data.list);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <NewsList allNewsData={allNewsData} />
    //   <TopNews />
    // </Layout>
    <Layout>
      <Header style={{ backgroundColor: "white" }}>
        <Input
          placeholder="搜索"
          style={{ width: 300 }}
          onChange={(e) => {
            e.preventDefault();
            loadData(e.target.value);
          }}
          suffix={<SearchOutlined />}
        />
        <span style={{ color: "black", float: "right" }}>
          <ChromeOutlined />
          RNews
        </span>
      </Header>
      <Layout>
        <Sider theme="light" width="25rem">
          <TopNews />
        </Sider>
        <Content style={{ backgroundColor: "white" }}>
          <NewsList allNewsData={data} />
        </Content>
      </Layout>
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allNewsData: New[] = [];
//   for (let i = 0; i < 11; i++) {
//     allNewsData.push({
//       isReviewed: false,
//       readCount: "174",
//       _id: "605d79c328806b4d3a352fa6",
//       title:
//         "软件学院关于2021届毕业生2020-2021学年优秀学生奖学金评选结果的公示",
//       src: "华南师范大学软件学院",
//       category: "campus",
//       pic:
//         "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
//       content:
//         '<p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">根据《关于做好2021届毕业生2020-2021学年优秀学生奖学金评选工作的通知》，华南师范大学软件学院秉持着公平、公正、公开的原则，严格遵照通知精神认真开展2021届毕业生2020-2021学年优秀学生奖学金评选工作。</span></span></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">通过公示细则、学生申报、年级审核、学院审核等环节，2021届毕业生2020-2021学年优秀学生奖学金评选结果已经产生，共计31人，现进行公示，公示时长为5天。如有异议，请于3月30日前发送问题至863747089@qq.com邮箱。</span></span></p><p style="text-align:center;"><strong><span style="color:#000000"><span style="font-size:18px">综合奖</span></span></strong></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">一等奖（共3人）：郑健南（82.61）、黄伟聪（82.19）、李嘉惠（79.92）</span></span></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">二等奖（共9人）：岑少琪（79.09）、刘威宏（74.66）、麦成源  （73.93）、何志豪（73.73）、欧阳信（71.89）、黄文鑫（71.37）、陈冠程（71.31）、温彩敏（70.38）、江佳凌（70.15）</span></span></p><p style="text-align:center;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">三等奖（共9人）：张宇健（70.13）、林育妍（69.18）、朱桂鑫（67.53）、杨贵强（67.21）、朱小杰  （66.97）、陈颖聪（66.31）、叶特（66.27）、杨满（66.02）、余远政（63.19）<strong>单项奖</strong></span></span></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">思想道德：共0人</span></span></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">学业表现（共4人）：陈布达（94.79）、孙铭哲（94.36）、张晓基（93.75）、陈晓伟（89.16）</span></span></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">专业技能与创新（共2人）：胡昊天（99.64）、钟凤琪（73.91）</span></span></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">艺体素养：共0人</span></span></p><p style="text-align:start;text-indent:2em;"><span style="color:#000000"><span style="font-size:18px">社会实践与创业（共4人）：郑雅芝（100）、蔡洪华（66.67）、陈纯纯（44.44）、郭志权（33.33）</span></span></p><p></p><p style="text-align:right;"><span style="color:#000000"><span style="font-size:18px">华南师范大学软件学院学生工作办公室</span></span></p><p style="text-align:right;"></p><p></p><p style="text-align:right;"><span style="color:#000000"><span style="font-size:18px">2021年3月25日</span></span></p>\n',
//       releaseTime: "2021-03-26T06:05:55.541Z",
//       description:
//         "根据《关于做好2021届毕业生2020-2021学年优秀学生奖学金评选工作的通知》，华南师范大学软件学院秉持着公平、公正、公开的原则，严格遵照通知精神认真开展2021届毕业生2020-2021学年优秀学生奖学金评选工作。",
//     });
//   }
//   return {
//     props: {
//       allNewsData,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:5000/api/news`);
  const data = await res.json();
  const allNewsData = data.data.list as New[];

  if (!allNewsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      allNewsData,
    }, // will be passed to the page component as props
  };
};

// import Head from "next/head";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <h1 className="title">
//           Read{" "}
//           <Link href="/posts/first-post">
//             <a>this page!</a>
//           </Link>
//         </h1>

//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className="grid">
//           <a href="https://nextjs.org/docs" className="card">
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className="card">
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className="card"
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className="card"
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
//         </a>
//       </footer>

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   );
// }
