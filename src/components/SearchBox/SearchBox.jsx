import { useFormik } from "formik";
import styles from "./SearchBox.module.css";

function SearchBox({ filter, onFilterChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default SearchBox;
