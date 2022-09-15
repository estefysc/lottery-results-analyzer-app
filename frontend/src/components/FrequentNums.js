import React, {useEffect, useState} from "react";
import axios from "axios";

import "./FrequentNums.css";

function FrequentNums() {
    const [text, setText] = useState("");

    function getMostFreqNumbers() {
        axios.get("http://localhost:5000/frequentNums", {crossdomain: true})
            .then(response => {
                setText(response.data.freqNums.map(
                    number => number.toString()
                ).join(", "));
            });
    }

    useEffect(() => getMostFreqNumbers(), []);

    return (
        <div className='main-container'>
            <div className='info-container'>
                <p className='info-text'>
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                </p>
            </div>
            <div className='number-container'>
                <p className='number-text'>{text}</p>
            </div>
        </div>
    )
}

export default FrequentNums;