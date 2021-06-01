import headerStyles from "../../styles/Header.module.css";
import ArticleStyles from "../../styles/Article.module.css";
import Link from "next/link";
const Topic = ({ id, main_title, second_title, description }) => {
  return (
    <Link href="/topic/[id]" as={`/topic/${id}`} key={id}>
      <a className={ArticleStyles.card}>
        <h1 className={headerStyles.title}>
          <span>{main_title}</span> {second_title}
        </h1>
        <p>{description}</p>
      </a>
    </Link>
  );
};

export default Topic;
