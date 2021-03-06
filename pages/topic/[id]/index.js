import { useRouter } from "next/router";
import Link from "next/link";
import { apiServer } from "../../../config";
import SubtopicList from "../../../components/topic/subtopic/SubtopicList";
import TopicTitle from "../../../components/topic/TopicTitle";
const topic = ({ subtopics, topic }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  console.log(topic.id);
  return (
    <>
      <button>
        <Link href="/">go back</Link>
      </button>
      <TopicTitle
        main_title={topic.main_title}
        second_title={topic.second_title}
        description={topic.description}
      />
      <SubtopicList topics={subtopics} />

      <br />
    </>
  );
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${apiServer}/topics/${id}`);
  const topic = await res.json();

  const res2 = await fetch(`${apiServer}/subtopics?topic.id=${id}`);
  const subtopics = await res2.json();

  return {
    props: {
      topic,
      subtopics,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${apiServer}/topics`);
  const topics = await res.json();
  const ids = topics.map((topic) => topic.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  //   const paths = articles.map((article) => {
  //     params: {
  //       id: article.id.toString();
  //     }
  //   });
  // const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
export default topic;
