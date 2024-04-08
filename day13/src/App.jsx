import { useState } from "react";
import "./App.css";

export const CurrenyInput = ({ name, value, onChangeInput }) => {
    return (
        <div>
            <label>{name} : </label>
            <input
                type="number"
                name={name}
                value={value}
                onChange={(e) => {
                    onChangeInput(e.target.name, e.target.value);
                }}
            />
        </div>
    );
};

const RATE = 1300;
function App() {
    const [currenyInput, SetCurrenyInput] = useState({
        krw: 0,
        usd: 0,
    });
    const onChangeInput = (name, value) => {
        if (name === "krw") {
            SetCurrenyInput({
                krw: value,
                usd: value / RATE,
            });
        } else if (name === "usd") {
            SetCurrenyInput({
                krw: value * RATE,
                usd: value,
            });
        }
    };

    return (
        <>
            <h1>환율 변환기(KRW-USD)</h1>
            <div>
                <CurrenyInput
                    name={"krw"}
                    value={currenyInput.krw}
                    onChangeInput={onChangeInput}
                />
            </div>
            <div>
                <CurrenyInput
                    name={"usd"}
                    value={currenyInput.usd}
                    onChangeInput={onChangeInput}
                />
            </div>
        </>
    );
}

export default App;
