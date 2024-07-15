import { useNavigate } from "react-router-dom";

import "./directory-item.style.scss";

export function DirectoryItem({ category }) {
  const navigate = useNavigate();

  const { imageUrl, title, route } = category;
  const routeHandler = () => navigate(route);

  return (
    <div onClick={routeHandler} className="directory-item-container">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="body">
        <h2>
          <span>{title}</span>
        </h2>

        <p>Shop Now</p>
      </div>
    </div>
  );
}
