import { useRouter } from "next/router";
import Link from "next/link";
import { apiServer } from "../../../config";
import SubtopicList from "../../../components/topic/subtopic/SubtopicList";
import TopicTitle from "../../../components/topic/TopicTitle";
import DetailList from "../../../components/details/DetailsList";
const topic = ({ subtopics, topic, details }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  const topicId = details[0].subtopic.topic;
  return (
    <>
      <Link href="/topic/[id]" as={topicId ? `/topic/${topicId}` : "/"}>
        go back
      </Link>
      <DetailList details={details} />
    </>
  );
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${apiServer}/details?subtopic.id=${id}`);
  const details = await res.json();

  // // const subtopic = details.subtopic;
  // const res3 = await fetch(`${apiServer}/topics/${id}`);
  // const topic = await res3.json();
  return {
    props: {
      // topic,
      // subtopic,
      details,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${apiServer}/subtopics`);
  const subtopics = await res.json();
  const ids = subtopics.map((subtopic) => subtopic.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  //   const paths = articles.map((article) => {
  //     params: {
  //       id: article.id.toString();
  //     }
  //   });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
export default topic;
