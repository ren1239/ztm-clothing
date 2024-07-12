import { categories } from "../../lib/categories";
import { DirectoryItem } from "../directory-item/directory-item.component";
import "./directory.style.scss";

export function Directory({}) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
