import "./ContactItem.css";
import { memo, useContext } from "react";
import { ContactDispatchContext } from "../App";

const ContactItem = ({ id, name, email }) => {
    const { onDelecte } = useContext(ContactDispatchContext);
    const onDelecteButton = () => {
        onDelecte(id);
    };
    return (
        <div className="ContactItem">
            <div className="name">{name}</div>
            <div className="contact">{email}</div>
            <button onClick={onDelecteButton}>🗑️ Remove</button>
        </div>
    );
};
export default memo(ContactItem);
