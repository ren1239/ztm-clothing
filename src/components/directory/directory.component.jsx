import { categories } from "../../lib/categories";
import { CategoryItem } from "../category-item/category-item.component";
import "./directory.style.scss";

export function Directory({}) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
