import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ concatList, onDelecte }) {
    return (
        <div className="ContactList">
            <div className="title">Contact List</div>
            {concatList.map((concat) => {
                return (
                    <ContactItem
                        {...concat}
                        key={concat.id}
                        onDelecte={onDelecte}
                    />
                );
            })}
        </div>
    );
}
