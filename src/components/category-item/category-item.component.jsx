import "./category-item.style.scss";

export function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
