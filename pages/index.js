import ArticleList from "../components/ArticleList";
import TopicList from "../components/topic/TopicList";
import Head from "next/head";
import Image from "next/image";
import { apiServer } from "../config";
// import styles from "../styles/Home.module.css";

export default function Home({ topics }) {
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
  console.log(`${apiServer}/topics`);
  const res = await fetch(`${apiServer}/topics`);
  const topics = await res.json();
  // const topics = [
  //   {
  //     id: 1,
  //     main_title: "Pure-Cork",
  //     second_title: "english speaking city",
  //     description:
  //       "Welcome, we are going to learn about Cork (Ireland) special initiatives and their environment friendly options",
  //     published_at: "2021-06-01T03:04:27.616Z",
  //     created_at: "2021-06-01T03:02:43.321Z",
  //     updated_at: "2021-06-01T03:04:27.639Z",
  //   },
  // ];
  return {
    props: {
      topics,
    },
  };
};
