import styles from "./ContactForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

function ContactForm({ onAddContact }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "the min number of characters is 3")
        .max(50, "the max number of characters is 50")
        .required("required field"),
      number: Yup.string()
        .min(3, "the min number of characters is 3")
        .max(50, "the max number of characters is 50")
        .required("required field"),
    }),
    onSubmit: (values) => {
      const newContact = {
        id: nanoid(),
        ...values,
      };
      onAddContact(newContact);
      formik.resetForm();
    },
  });

  return (
    <form className={styles.contactForm} onSubmit={formik.handleSubmit}>
      <div className={styles.addContact}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className={styles.addContact}>
        <label htmlFor="number">Number</label>
        <input
          className={styles.input}
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </div>
      <button className={styles.addButton} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
