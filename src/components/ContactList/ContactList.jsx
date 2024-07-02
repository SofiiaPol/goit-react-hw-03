import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
