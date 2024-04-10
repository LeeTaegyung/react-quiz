import { useRef, useState } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ onCreate }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    const nameRef = useRef("");
    const emailRef = useRef("");

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (user.name === "") {
            nameRef.current.focus();
            return;
        } else if (user.email === "") {
            emailRef.current.focus();
            return;
        }
        onCreate(user.name, user.email);
        setUser({
            name: "",
            email: "",
        });
    };

    const onKeyDown = (e) => {
        console.log(e.target.name);
        if (e.keyCode === 13) {
            if (e.target.name === "name") {
                emailRef.current.focus();
            } else if (e.target.name === "email") {
                onSubmit();
                emailRef.current.blur();
            }
        }
    };

    return (
        <div className="ContactEditor">
            <div className="title">Add Contact</div>
            <div className="input_wrapper">
                <input
                    className="name"
                    name="name"
                    value={user.name}
                    onChange={onChange}
                    ref={nameRef}
                    onKeyDown={onKeyDown}
                    placeholder="이름 ..."
                />
                <input
                    className="contact"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                    ref={emailRef}
                    onKeyDown={onKeyDown}
                    placeholder="연락처(이메일) ..."
                />
            </div>
            <button onClick={onSubmit}>Add</button>
        </div>
    );
}
