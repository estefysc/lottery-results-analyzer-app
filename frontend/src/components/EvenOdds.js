import React, {useEffect, useState} from "react";
import axios from "axios";

import "./EvenOdds.css";

function EvenOdds() {
    const [data, setData] = useState("");

    function getData() {
        axios.get("http://localhost:5000/evenOdd", {crossdomain: true})
            .then(response => {
                setData(response.data);
            });
    }

    useEffect(() => getData(), []);

    return (
        <div>
            <h1 className="first-title">Even and Odd Numbers</h1>
            <p className="paragraph">
                {/*Total even numbers: {data.numbersData.totalEvenNumbers}*/}
                {/*Total odd numbers: {data.numbersData.totalOddNumbers}*/}
            </p>

            <h1 className="second-title">Even/Odd Numbers Info</h1>
            <p className="paragraph">
                Average even in one set: {Math.round(data.averageEven * 100) / 100}
            </p>
            <p className="paragraph">
                Average odd in one set: {Math.round(data.averageOdd * 100) / 100}
            </p>
            <p className="paragraph">
                Percent zero even: {Math.round(data.percentZeroEven * 100) / 100}
            </p>
            <p className="paragraph">
                Percent one even: {Math.round(data.percentOneEven * 100) / 100}
            </p>
            <p className="paragraph">
                Percent two even: {Math.round(data.percentTwoEven * 100) / 100}
            </p>
            <p className="paragraph">
                Percent three even: {Math.round(data.percentThreeEven * 100) / 100}
            </p>
            <p className="paragraph">
                Percent four even: {Math.round(data.percentFourEven * 100) / 100}
            </p>
            <p className="paragraph">
                Percent five even: {Math.round(data.percentFiveEven * 100) / 100}
            </p>
            <p className="paragraph">
                Percent six even: {Math.round(data.percentSixEven * 100) / 100}
            </p>
        </div>
    )
}

export default EvenOdds;
