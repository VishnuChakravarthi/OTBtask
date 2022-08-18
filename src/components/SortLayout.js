import { AiFillStar, AiFillPoundCircle } from "react-icons/ai";
import { MdOutlineSortByAlpha } from "react-icons/md";
import styles from "./SortLayout.module.css";

const sortLayout = [
  {
    name: "alphabetically",
    icon: MdOutlineSortByAlpha,
    sortSelectorKey: "name",
  },
  { name: "by price", icon: AiFillPoundCircle, sortSelectorKey: "price" },
  { name: "by rating", icon: AiFillStar, sortSelectorKey: "rating" },
];

const SortLayout = ({ sortBy, setSortBy }) => {
  const handleFilterChange = (key) => {
    setSortBy({ key, dir: -sortBy.dir });
  };

  return (
    <ul className={styles.container}>
      {/* Mapping through the sortLayout. Clicking on the same sort option toggles between ascending and descending orders */}
      {sortLayout?.map((layout, i) => (
        <li
          key={i}
          className={`${styles.list} ${
            sortBy?.key === layout?.sortSelectorKey && styles.active
          }`}
          onClick={() => handleFilterChange(layout?.sortSelectorKey)}
        >
          <span>
            sort&nbsp;<strong>{layout?.name}</strong>
          </span>
          <layout.icon
            className={`${styles.icons} ${
              sortBy?.key === layout?.sortSelectorKey && styles.active
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default SortLayout;
