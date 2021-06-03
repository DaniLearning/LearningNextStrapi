import headerStyles from "../../styles/Header.module.css";
import ArticleStyles from "../../styles/Article.module.css";
import Image from "../../styles/Image.module.css";
import Link from "next/link";
import { apiServer } from "../../config";
const Topic = ({ id, title, description, image_url }) => {
  return (
    <div key="id" className={Image.detail}>
      {image_url && <img className={Image.image} src={image_url} alt="" />}

      <a className={ArticleStyles.cardDetail}>
        <h1 className={headerStyles.title}>
          <span>{}</span> {title}
        </h1>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default Topic;
