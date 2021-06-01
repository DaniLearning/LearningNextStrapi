import articleStyles from "../../styles/Article.module.css";
import Detail from "./Detail";
const TopicList = ({ details }) => {
  return (
    <div className={articleStyles.grid}>
      {details.map((detail) => (
        <Detail
          title={detail.title}
          description={detail.content}
          image_url=""
          // {
          //   detail.main_image
          //     ? detail.main_image.formats.medium
          //       ? detail.main_image.formats.medium.url
          //       : detail.main_image.formats.small.url
          //     : null
          // }
        />
      ))}
    </div>
  );
};

export default TopicList;
