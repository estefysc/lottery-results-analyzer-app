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

    return(

        <div>
            <p className='number-text'>{text}</p>
        </div>
    )
}

export default FrequentNums;