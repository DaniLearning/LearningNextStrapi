import articleStyles from "../../../styles/Article.module.css";
import Topic from "./Subtopic";
const TopicList = ({ topics, topicId }) => {
  console.log("id", topicId);
  return (
    <div className={articleStyles.grid}>
      {topics.map((topic) => (
        <Topic
          topicId={topicId}
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
