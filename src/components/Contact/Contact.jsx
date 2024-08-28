import { FaRegUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux"; 
import { deleteContact } from "../../redux/contactsSlice"; 
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div className={s.wrapper}>
      <div>
        <p>
          <FaRegUser className={s.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button
        onClick={() => handleDelete(contact.id)}
        type="button"
        className={s.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
