import { useReducer, useRef, useCallback, createContext, useMemo } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
    {
        id: 0,
        name: "홍길동",
        email: "honghong@gmail.com",
    },
    {
        id: 1,
        name: "아무개",
        email: "undefined@gmail.com",
    },
    {
        id: 2,
        name: "김둘리",
        email: "kimmmm@gmail.com",
    },
];

function reducer(concatList, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...concatList];
        case "REMOVE":
            return concatList.filter((concat) => concat.id !== action.targetId);
    }
}

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
    const [concatList, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = useCallback((name, email) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                name: name,
                email: email,
            },
        });
    }, []);

    const onDelecte = useCallback((targetId) => {
        dispatch({
            type: "REMOVE",
            targetId: targetId,
        });
    }, []);

    const memoizedDispatch = useMemo(() => {
        return { onCreate, onDelecte };
    }, []);

    return (
        <div className="App">
            <h2>Contact List</h2>
            <ContactStateContext.Provider value={concatList}>
                <ContactDispatchContext.Provider value={memoizedDispatch}>
                    <section>
                        <ContactEditor />
                    </section>
                    <section>
                        <ContactList />
                    </section>
                </ContactDispatchContext.Provider>
            </ContactStateContext.Provider>
        </div>
    );
}

export default App;
