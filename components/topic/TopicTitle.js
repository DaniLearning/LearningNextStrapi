import headerStyles from "../../styles/Header.module.css";
import ArticleStyles from "../../styles/Article.module.css";

import Link from "next/link";
const TopicTitle = ({ main_title, second_title, description }) => {
  return (
    <>
      <h1 className={headerStyles.title}>
        <span>{main_title}</span> {second_title}
      </h1>
      {/* <p>{description}</p> */}
    </>
  );
};

export default TopicTitle;
