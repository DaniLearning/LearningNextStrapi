import articleStyles from "../../styles/Article.module.css";
import Topic from "./Topic";
const TopicList = ({ topics }) => {
  return (
    <div className={articleStyles.grid}>
      {topics.map((topic) => (
        <Topic
          id={topic.id}
          main_title={topic.main_title}
          second_title={topic.second_title}
          description={topic.description}
        />
      ))}
    </div>
  );
};

export default TopicList;
