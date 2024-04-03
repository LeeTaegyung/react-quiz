import "./App.css";
import Welcome from "./components/Welcome";

function App() {
    const userInfo = {
        name: "홍길동",
        isMember: true,
    };
    return <Welcome {...userInfo} />;
}

export default App;
