import "./ContactItem.css";

export default function ContactItem({ id, name, email, onDelecte }) {
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
}
