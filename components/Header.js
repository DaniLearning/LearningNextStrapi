import headerStyles from "../styles/Header.module.css";
import ArticleStyles from "../styles/Article.module.css";
const Header = () => {
  return (
    <a className={ArticleStyles.card}>
      <h1 className={headerStyles.title}>
        <span>Cork</span> English Project
      </h1>
      <p>Learning about the city of Cork</p>
    </a>
  );
};

export default Header;
