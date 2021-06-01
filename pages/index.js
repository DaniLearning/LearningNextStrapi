import ArticleList from "../components/ArticleList";
import TopicList from "../components/topic/TopicList";
import Head from "next/head";
import Image from "next/image";
import { apiServer } from "../config";
// import styles from "../styles/Home.module.css";

export default function Home({ topics }) {
  console.log(topics);
  console.log(`${apiServer}/topics`);
  return (
    <div>
      <Head>
        <title>Cork</title>
        <meta name="keywords" content="city, Cork " />
      </Head>
      {/* <ArticleList articles={articles} /> */}
      {}
      <TopicList topics={topics} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${apiServer}/topics`);
  const topics = await res.json();
  return {
    props: {
      topics,
    },
  };
};
