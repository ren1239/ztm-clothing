import { Link } from "react-router-dom";
import "./directory-item.style.scss";

export function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="body">
        <h2>
          <Link to={`/shop/${title}`}>
            <span>{title}</span>
          </Link>
        </h2>

        <p>Shop Now</p>
      </div>
    </div>
  );
}
