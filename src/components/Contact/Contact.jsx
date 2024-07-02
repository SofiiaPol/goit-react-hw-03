import styles from "./Contact.module.css";

function Contact({ name, number }) {
  return (
    <li>
      <p>{`${name}: ${number}`}</p>
    </li>
  );
}

export default Contact;
