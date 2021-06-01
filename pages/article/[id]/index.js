import { useRouter } from "next/router";
import Link from "next/link";
const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  console.log(article);
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?id=${id}`
  );
  const articlejson = await res.json();
  const article = articlejson[0];
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
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
export default article;
