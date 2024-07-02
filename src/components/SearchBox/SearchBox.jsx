import styles from "./SearchBox.module.css";

function SearchBox({ filter, onFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
}

export default SearchBox;
