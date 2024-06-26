import { useContext, useState } from "react";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import Header from "../components/Header";
import { DiaryStateContext } from "../App";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime();
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0,
        23,
        59,
        59
    ).getTime();
    return data.filter(
        (item) => beginTime <= item.createdDate && endTime >= item.createdDate
    );
};

const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(DiaryStateContext);

    const monthlyData = getMonthlyData(pivotDate, data);

    const onIncreateMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
        );
    };
    const onDecreateMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
        );
    };

    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${
                    pivotDate.getMonth() + 1
                }월`}
                leftChild={<Button onClick={onDecreateMonth} text={"<"} />}
                rightChild={<Button onClick={onIncreateMonth} text={">"} />}
            />
            <DiaryList data={monthlyData} />
        </div>
    );
};

export default Home;
