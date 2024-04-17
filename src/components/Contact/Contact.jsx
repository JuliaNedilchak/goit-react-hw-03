import css from "./Contact.module.css";
const Contact = ({ name, number }) => {
  return (
    <div className={css.block}>
      <div className={css.contactDetail}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.buttonDelete}>Delete</button>
    </div>
  );
};

export default Contact;
