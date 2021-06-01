import headerStyles from "../../styles/Header.module.css";
import ArticleStyles from "../../styles/Article.module.css";
import Link from "next/link";
const Topic = ({ id, title, description }) => {
  return (
    <>
      <a className={ArticleStyles.cardDetail}>
        <h1 className={headerStyles.title}>
          <span>{}</span> {title}
        </h1>
        <p>{description}</p>
      </a>
    </>
  );
};

export default Topic;
