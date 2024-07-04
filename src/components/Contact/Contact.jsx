import styles from "./Contact.module.css";

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={styles.contact}>
      <p>{`${name}: ${number}`}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
