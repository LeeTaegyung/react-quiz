import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactStateContext } from "../App";

export default function ContactList() {
    const concatList = useContext(ContactStateContext);
    return (
        <div className="ContactList">
            <div className="title">Contact List</div>
            {concatList.map((concat) => {
                return <ContactItem {...concat} key={concat.id} />;
            })}
        </div>
    );
}
