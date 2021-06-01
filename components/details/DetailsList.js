import articleStyles from "../../styles/Article.module.css";
import Detail from "./Detail";
const TopicList = ({ details }) => {
  return (
    <div className={articleStyles.grid}>
      {details.map((detail) => (
        <Detail
          title={detail.title}
          description={detail.content}
          image_url={""}
        />
      ))}
    </div>
  );
};

export default TopicList;
