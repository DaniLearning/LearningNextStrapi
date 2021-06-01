import articleStyles from "../../styles/Article.module.css";
import Topic from "./Topic";
const TopicList = ({ topics }) => {
  return (
    <div className={articleStyles.grid}>
      {topics.map((topic) => (
        <Topic
          id={topic.id}
          main_title={topic.main_title || topic.title}
          second_title={topic.second_title || topic.subtitle}
          description={topic.description}
        />
      ))}
    </div>
  );
};

export default TopicList;
